import _ from "lodash";
import React from "react";
import "./table.scss";

export const Table = ({
  headings,
  values,
  className,
}: {
  headings: Array<string>;
  values: Array<
    Array<{
      value: string | object;
      render?: Function;
    }>
  >;
  className?: string;
}) => {
  let headingJsx = [];
  let bodyJsx = [];

  _.map(headings, (heading, index) => {
    headingJsx.push(<th>{heading}</th>);

    bodyJsx.push(
      <tr>
        {_.map(values[index], (data) => {
          return !!data.render ? (
            <td>{data.render(data.value)}</td>
          ) : (
            <td>data.value</td>
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
};
