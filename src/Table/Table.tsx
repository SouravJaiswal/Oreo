import _ from "lodash";
import React from "react";
import "./table.scss";

export const Table = ({
                        headings,
                        values,
                        className,
                      }: {
    headings: Array<string>;
    values: Array<Array<{
      value: any;
      render?: Function;
      isHeading?: boolean;
    }>>;
    className?: string;
  }) => {
    let headingJsx = [];
    let bodyJsx = [];

    headings.forEach(heading =>
      headingJsx.push(<th>{heading}</th>)
    );

    values.forEach(row => {
      bodyJsx.push(
        <tr>
          {_.map(row, data => {
            return !!data.render ? (
              <td className={data.isHeading ? "table__heading" : ""}>
                {data.render(data.value)}
              </td>
            ) : (
              <td className={data.isHeading ? "table__heading" : ""}>
                {data.value}
              </td>
            );
          })}
        </tr>
      );

    });

    return (
      <table className={`table ${className}`}>
        <thead className="table__head">
        <tr>{headingJsx}</tr>
        </thead>
        <tbody className="table__body">{bodyJsx}</tbody>
      </table>
    );
  }
;
