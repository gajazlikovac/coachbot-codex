'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as d3 from 'd3';
import { nanoid } from 'nanoid';

import { Theme, useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/shared/Button';
import { Input } from '@/shared/Input';
import { CREATE_CATEGORY_ID } from './CategoriesManager';

const LABEL_COLORS = {
  [Theme.LIGHT]: {
    circleColor: '#AFB1BD',
    dotColor: '#33B3A9',
    activeColor: '#473F65',
  },
  [Theme.DARK]: {
    circleColor: '#727379',
    dotColor: '#33B3A9',
    activeColor: '#FFFFFF',
  },
} as const;

const calculateTextWidth = (text: string, offset: number, font: string = '400 14px Helvetica Now Display') => {
  const canvas = document?.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('Could not get 2D context');
  }

  context.font = font;
  return context.measureText(text).width + offset;
};

interface DataItemWithKey {
  id: string;
  key: string | null;
  value: number;
  displayName?: string;
  name: string;
  active?: boolean;
}

export const SimpleRadar = ({ data, onClick }: { data: any[]; onClick?: (item: DataItemWithKey) => any }) => {
  const { theme } = useTheme();
  const { dotColor, circleColor, activeColor } = LABEL_COLORS[theme];

  const [svgWidth, setSvgWidth] = useState(0);
  const [svgHeight, setSvgHeight] = useState(0);
  const [id, setId] = useState<string>();
  const svgRef = useRef<SVGSVGElement | null>(null);

  const dimensions = useMemo(
    () => ({
      width: svgWidth,
      height: svgHeight,
      labelHeight: 46,
      radius: Math.min(85, (svgWidth / 3) * 0.2),
    }),
    [svgHeight, svgWidth]
  );

  const circles = d3.range(1, 11).reverse();
  const radiusScale = d3.scaleLinear().domain([0, 10]).range([0, dimensions.radius]).nice();
  const angleScale = d3
    .scaleLinear()
    .domain(d3.extent(d3.range(data.length + 1)) as any)
    .range([0, 2 * Math.PI]);

  const getCoordinatesForAngle = useCallback(
    (angle: number, offset = 1) => {
      return [
        dimensions.radius * Math.cos(angle - Math.PI / 2) * offset,
        dimensions.radius * Math.sin(angle - Math.PI / 2) * offset,
      ];
    },
    [dimensions.radius]
  );

  useEffect(() => {
    setId(CSS.escape(`id-${nanoid()}`));
    const updateSvgWidth = () => {
      if (svgRef.current) {
        const svgRect = svgRef.current.getBoundingClientRect();
        setSvgHeight(svgRect.height);
        setSvgWidth(svgRect.width);
      }
    };

    updateSvgWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateSvgWidth();
    });

    if (svgRef.current) {
      resizeObserver.observe(svgRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const highlightDot = useCallback(
    (d: DataItemWithKey, highlight: boolean) => {
      const selectedDot = d3.select(`circle.${id}-dot[data-key='${d.id}']`);

      if (!selectedDot.empty()) {
        !d.active && selectedDot.attr('fill', highlight ? '#b6b6b6' : dotColor);
      } else {
        console.error(`Element with class .${id}-dot[data-key='${d.id}'] not found`);
      }
    },
    [id]
  );

  const getLabelOffset = useCallback(
    (angle: number, labelWidth: number, labelX: number) => {
      const offsetX = labelX < 0 ? labelWidth : labelX < 3 ? labelWidth / 2 : 0;
      const angleDeg = ((angle - Math.PI / 2) * 180) / Math.PI;
      const labelheightOffset = dimensions.labelHeight * 0.5;
      const offsetY =
        Math.abs(angleDeg) === 90
          ? angleDeg < 0
            ? labelheightOffset
            : -labelheightOffset
          : angleDeg > 63 && angleDeg < 126
            ? -dimensions.labelHeight * 0.5
            : 0;

      return [offsetX, offsetY + dimensions.labelHeight / 2];
    },
    [svgWidth]
  );

  return (
    <svg
      id={id}
      width="100%"
      height="100%"
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      preserveAspectRatio="xMinYMin meet"
      ref={svgRef}
      className="overflow-visible"
    >
      <g key="chart-group" className={`${id}-chartGroup`} transform={`translate(${svgWidth / 2} ,${svgHeight / 2} )`}>
        {circles.map((circle: number, i: number) => (
          <circle
            key={`circle-${i}`}
            className={`${id}-circle`}
            r={radiusScale(circle)}
            fill="none"
            stroke={circleColor}
            strokeWidth="0.5"
          />
        ))}

        {data.map((item: DataItemWithKey, i: number) => {
          const angle = angleScale(i);
          const [x, y] = getCoordinatesForAngle(angle);
          const labelWidth = Math.max(svgWidth / 2.8, calculateTextWidth(item.name, 80));
          const [labelX, labelY] = getCoordinatesForAngle(angle, 2);
          const [offsetX, offsetY] = getLabelOffset(angle, labelWidth, labelX);

          return (
            <g key={`axis-${i}`} className={`${id}-axis`}>
              <line x1="0" x2={x} y1="0" y2={y} stroke={circleColor} strokeWidth="0.5" />
              <circle
                className={`${id}-dot z-10 cursor-pointer`}
                data-key={item.id}
                cx={x}
                cy={y}
                r={dimensions.radius / 10}
                fill={item.active ? activeColor : dotColor}
                onMouseEnter={() => highlightDot(item, true)}
                onMouseLeave={() => highlightDot(item, false)}
                onClick={() => onClick?.(item)}
              />
              <foreignObject
                key={item.id}
                x={labelX - offsetX}
                y={labelY - offsetY}
                width={labelWidth}
                height={dimensions.labelHeight}
                className={`${id}-label`}
                onMouseEnter={() => highlightDot(item, true)}
                onMouseLeave={() => highlightDot(item, false)}
                onClick={() => onClick?.(item)}
              >
                {item.id === CREATE_CATEGORY_ID ? (
                  <Input
                    id={'add-category-input'}
                    className="flex-grow gap-y-2"
                    placeholder={`Add topic ${data.length} / 10`}
                    inputClassName="flex items-center justify-between gap-x-2 rounded-xl border border-dark-aquamarine bg-transparent p-2 px-5 pe-10 text-light-gray hover:border-main placeholder:text-light-gray"
                  >
                    <Button className="cbi-add absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 p-0 text-2xl hover:text-light-gray" />
                  </Input>
                ) : (
                  <div
                    className={`${id}-label-content group flex size-full items-center justify-between gap-x-2 text-nowrap rounded-full border border-transparent bg-graphic/[14%] p-3.5 text-base text-light-gray hover:border-main hover:text-main`}
                  >
                    <span className="line-clamp-1 inline-block w-[75%] overflow-hidden text-ellipsis text-nowrap ps-1">
                      {item.name}
                    </span>
                    <div className={`flex gap-x-2 text-dark-gray group-hover:text-light-gray`}>
                      <span className="cbi-edit-2 p-0 text-lg hover:text-main" />
                      <span className="cbi-trash p-0 text-lg hover:text-main disabled:opacity-20" />
                    </div>
                  </div>
                )}
              </foreignObject>
            </g>
          );
        })}
      </g>
    </svg>
  );
};
