'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { nanoid } from 'nanoid';

import { Theme, useTheme } from '@/contexts/ThemeContext';

const LABEL_COLORS = {
  [Theme.LIGHT]: {
    circleColor: '#AFB1BD',
    backgroundColor: '#46464624',
    textColor: '#473F65',
    activeColor: '#473F65',
    iconColor: '#D6D6D6',
    dotColor: '#33B3A9',
    iconActiveColor: '#473F6524',
  },
  [Theme.DARK]: {
    circleColor: '#727379',
    backgroundColor: '#FFFFFF24',
    textColor: '#FFFFFF',
    activeColor: '#FFFFFF',
    iconColor: '#393A44',
    dotColor: '#33B3A9',
    iconActiveColor: '#FFFFFF24',
  },
} as const;

const DOMAIN_MAX = 10;
const DOT_RADIUS = 5;

const calculateTextWidth = (text: string, offset: number, font: string = '400 14px Helvetica Now Display') => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('Could not get 2D context');
  }

  context.font = font;
  return context.measureText(text).width + offset;
};

// const processData = (data: any[]): DataItemWithKey[] => {
//   return data.map((item) => ({
//     ...item,
//     displayName: item.displayName || item.name,
//     value: 10,
//     key: item.name,
//   }));
// };

interface DataItemWithKey {
  key: string | null;
  value: number;
  displayName: string;
  name: string;
  active?: boolean;
}

interface RadarChartProps {
  handleClick?: (index: number) => void;
  data: any[];
  className?: string;
  renderLabel: any;
}

export const RadarChart = ({ handleClick, data, className }: RadarChartProps) => {
  const { theme } = useTheme();

  const [svgWidth, setSvgWidth] = useState(0);
  const [svgHeight, setSvgHeight] = useState(0);

  const svgRef = useRef<SVGSVGElement | null>(null);
  const uniqueId = useRef<string>(CSS.escape(`id-${nanoid()}`));
  const id = uniqueId.current;

  useEffect(() => {
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

  useEffect(() => {
    const rawDiameter = svgWidth / 5;
    const diameter = Math.max(120, Math.min(rawDiameter, svgHeight));
    const radius = diameter / 2;
    const angleSlice = (Math.PI * 2) / data.length;
    const radialScale = d3.scaleLinear().domain([0, 10]).range([0, radius]);
    const { dotColor, circleColor, activeColor, backgroundColor, iconColor } = LABEL_COLORS[theme];

    const svg = d3
      .select(svgRef.current ?? null)
      .attr('id', id)
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', `0 0 ${svgWidth} ${svgHeight}`);

    const chartGroup = svg
      .selectAll(`g.${id}-chartGroup`)
      .data([null])
      .join(
        (enter) =>
          enter
            .append('g')
            .attr('class', `${id}-chartGroup`)
            .attr('transform', `translate(${svgWidth / 2}, ${svgHeight / 2})`),
        (update) => update.attr('transform', `translate(${svgWidth / 2}, ${svgHeight / 2})`),
        (exit) => exit.remove()
      );

    data.forEach((d, i) => {
      const angle = angleSlice * i - Math.PI / 2;
      const x2 = radialScale(DOMAIN_MAX) * Math.cos(angle);
      const y2 = radialScale(DOMAIN_MAX) * Math.sin(angle);
      chartGroup
        .append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', x2)
        .attr('y2', y2)
        .attr('stroke', circleColor)
        .attr('stroke-width', 0.5);
    });

    data.forEach((d, i) => {
      const angle = angleSlice * i - Math.PI / 2;
      return radialScale(d.value) * Math.sin(angle);
    });

    const addCircles = () => {
      chartGroup
        .selectAll(`circle.${id}-circle`)
        .data(d3.range(1, 11).reverse())
        .join(
          (enter) =>
            enter
              .append('circle')
              .attr('class', `${id}-circle`)
              .attr('r', (d) => radialScale(d))
              .attr('fill', 'none')
              .attr('stroke', circleColor)
              .attr('stroke-width', 0.5),
          (update) => update.attr('r', (d) => radialScale(d)),
          (exit) => exit.remove()
        );
    };

    const addAxis = () => {
      chartGroup
        .selectAll(`.${id}-axis`)
        .data(data)
        .join(
          (enter) => {
            const g = enter.append('g').attr('class', `${id}-axis`);
            g.append('line').attr('x1', 0).attr('y1', 0).attr('stroke', circleColor).attr('stroke-width', 0.5);
            return g;
          },
          (update) => update,
          (exit) => exit.remove()
        )
        .select('line')
        .attr('x2', (d, i) => {
          const angle = angleSlice * i - Math.PI / 2;
          return radialScale(10) * Math.cos(angle);
        })
        .attr('y2', (d, i) => {
          const angle = angleSlice * i - Math.PI / 2;
          return radialScale(10) * Math.sin(angle);
        });
    };

    const calculateCx = (d: DataItemWithKey, i: number) => {
      const angle = angleSlice * i - Math.PI / 2;
      return radialScale(d.value) * Math.cos(angle);
    };

    const calculateCy = (d: DataItemWithKey, i: number) => {
      const angle = angleSlice * i - Math.PI / 2;
      return radialScale(d.value) * Math.sin(angle);
    };

    const calculateLabelX = (d: DataItemWithKey, i: number) => {
      const angle = angleSlice * i - Math.PI / 2;
      const scale = 10 * 4;
      const offset = Math.max(svgWidth / 3, calculateTextWidth(d.displayName, 90));

      return radialScale(scale) * Math.cos(angle) - offset / 2;
    };

    const calculateLabelY = (d: DataItemWithKey, i: number) => {
      const angle = angleSlice * i - Math.PI / 2;
      const scale = 10 * 1.5;
      const offset = i === 0 && data.length > 6 ? 40 : data.length / 2 === i && data.length > 6 ? -12 : 60 * 0.25;

      return radialScale(scale) * Math.sin(angle) - offset;
    };

    const highlightLabelAndDot = (d: DataItemWithKey, highlight: boolean) => {
      const selectedDot = d3.select(`circle.${id}-dot[data-key='${d.key}']`);
      const labelText = d3.select(`foreignObject.${id}-label[data-key='${d.key}']`);

      if (!selectedDot.empty()) {
        selectedDot.attr('fill', highlight ? activeColor : '#33B3A9');
        labelText
          .select('div')
          .style('border', `1px solid ${highlight ? activeColor : 'transparent'}`)
          .style('background', !d.active || highlight ? backgroundColor : 'transparent')
          .style('color', highlight ? activeColor : '#B6B6B6');
      } else {
        console.error(`Element with class .${id}-dot[data-key='${d.key}'] not found`);
      }
    };

    const applyEventHandlers = (selection: any) => {
      selection
        .on('mouseenter', function (_: any, d: DataItemWithKey) {
          if (!d.active) {
            highlightLabelAndDot(d, true);
          }
        })
        .on('mouseleave', function (_: any, d: DataItemWithKey) {
          if (!d.active) {
            highlightLabelAndDot(d, false);
          }
        })
        .on('click', function (_: any, d: DataItemWithKey) {
          const index = data.findIndex((item) => item.key === d.key);
          if (handleClick) {
            d.active = true;
            handleClick(index);
          }
        });
    };

    const generateDots = () => {
      const selection = chartGroup
        .selectAll(`circle.${id}-dot`)
        .data(data)
        .join(
          (enter) =>
            enter
              .append('circle')
              .attr('class', `${id}-dot`)
              .attr('data-key', (d) => d.key)
              .attr('cx', (d, i) => calculateCx(d, i))
              .attr('cy', (d, i) => calculateCy(d, i))
              .attr('r', DOT_RADIUS)
              .attr('fill', dotColor)
              .style('cursor', 'pointer')
              .style('z-index', '10'),
          (update) =>
            update
              .attr('cx', (d, i) => calculateCx(d, i))
              .attr('cy', (d, i) => calculateCy(d, i))
              .attr('r', DOT_RADIUS)
              .attr('fill', dotColor)
              .style('cursor', 'pointer')
              .style('z-index', '10'),
          (exit) => exit.remove()
        );

      applyEventHandlers(selection);
    };

    const generateLabels = () => {
      chartGroup
        .selectAll(`foreignObject.${id}-label`)
        .data(data)
        .join(
          (enter) => {
            const label = enter
              .append('foreignObject')
              .attr('class', `${id}-label`)
              .attr('data-key', (d) => d.key)
              .attr('x', (d, i) => calculateLabelX(d, i))
              .attr('y', (d, i) => calculateLabelY(d, i))
              .attr('width', (d) => Math.max(svgWidth / 3, calculateTextWidth(d.displayName, 90)))
              .attr('height', 40);

            const div = label
              .append('xhtml:div')
              .attr('class', `${id}-label-content`)
              .style('width', '100%')
              .style('display', 'flex')
              .style('justify-content', 'space-between')
              .style('align-items', 'center')
              .style('column-gap', '0.75rem')
              .style('padding', '8px 15px')
              .style('border', '1px solid transparent')
              .style('border-radius', '20px')
              .style('font-size', '14px')
              .style('white-space', 'nowrap')
              .style('cursor', 'default')
              .style('background', (d) => (d.active ? 'linear-gradient(to right, #4AB38D, #DBA91B)' : backgroundColor))
              .style('color', (d) => (d.active ? activeColor : '#B6B6B6'))
              .html(
                (d) => `
                  <span style="padding-left: 5px">${d.displayName}</span>
                  <div style="display: flex; align-items: center; column-gap: 0.5rem; color: ${iconColor}">
                    <i class="cbi-edit-2" style="font-size: 14px;"></i>
                    <i class="cbi-trash" style="font-size: 14px;"></i>
                  </div>
                `
              );

            applyEventHandlers(div);

            return label;
          },
          (update) => {
            update.attr('x', (d, i) => calculateLabelX(d, i)).attr('y', (d, i) => calculateLabelY(d, i));

            const div = update.select(`div.${id}-label-content`);

            div
              .style('background', (d) => (d.active ? 'linear-gradient(to right, #4AB38D, #DBA91B)' : backgroundColor))
              .style('color', (d) => (d.active ? activeColor : '#B6B6B6'))
              .html(
                (d) => `
                  <span style="padding-left: 5px">${d.displayName}</span>
                  <div style="display: flex; align-items: center; column-gap: 0.5rem; color: ${iconColor}">
                    <i class="cbi-edit-2" style="font-size: 14px;"></i>
                    <i class="cbi-trash" style="font-size: 14px;"></i>
                  </div>
                `
              );

            applyEventHandlers(div);

            return update;
          },
          (exit) => exit.remove()
        );
    };

    addCircles();
    addAxis();
    generateDots();
    generateLabels();

    return () => {};
  }, [data, svgWidth, svgHeight, theme]);

  return <svg className={className} ref={svgRef}></svg>;
};
