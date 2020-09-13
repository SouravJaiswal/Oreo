export interface LineDataProps {
  /**
   * All the points with labels go here
   * All the points with markers go here
   * If a particular label is not provided,
   * then that label will not be displayed
   * If the axis is not provided, x is the default
   * this is only applicable for the markers
   */
  markers: Array<{
    x: number;
    y: number;
    pointLabel?: string;
    hoverLabel?: string;
    markerLabel?: string;
    axis?: string;
  }>;
  /**
   * Default prepend value for the point label
   */
  defaultPointLabel?: string;
  /**
   * Default prepend value for the hover label
   */
  defaultHoverLabel?: string;
  /**
   * All the data for the line path must be provided
   * here, including all those in the markers
   */
  chartData: Array<{
    id: string;
    data: Array<{
      x: number | string;
      y: number | string;
    }>;
  }>;
  /**
   * These are the labels for each axis
   */
  axisLabel: {
    x: number[] | string[];
    y: number[] | string[];
  };
  /**
   * Max values of each axis
   */
  maxValues: {
    x: number;
    y: number;
  };
  /**
   * Min values of each axis
   */
  minValues: {
    x: number;
    y: number;
  };
}

export interface LineProps {
  meta: LineDataProps;
  margin?: {
    top: number;
    left: number;
    right: number;
    bottom: number;
  };
  colors: Array<string>;
  legends: {
    x: string;
    y: string;
  };
  pointLabel?: any;
  toolTip?: any;
  defs: Array<{
    name: string;
    styles: Array<object>;
  }>;
  fill:
    | Array<{
        match: string;
        id: string;
      }>
    | any;
  enableArea: boolean;
  markerLineStyles?: Array<any>;
  markerTextStyles?: Array<any>;
  formatAxis?: {
    x: any | null;
    y: any | null;
  };
}
