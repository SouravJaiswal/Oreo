import React from "react";
import { Table } from "./index";

export default {
  title: "Table",
};

export const Default = () => {
  return (
    <>
      <Table
        headings={[
          "",
          "Correct",
          "Incorrect",
          "Skipped",
          "Marks",
          "Accuracy",
          "Efficiency",
        ]}
        values={[
          [
            {
              value: "Section 1",
              render: (value) => {
                return <div>{value}</div>;
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
          ],
          [
            {
              value: "Section 1",
              render: (value) => {
                return <div>{value}</div>;
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
          ],
          [
            {
              value: "Section 1",
              render: (value) => {
                return <div>{value}</div>;
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
          ],
          [
            {
              value: "Section 1",
              render: (value) => {
                return <div>{value}</div>;
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
          ],
          [
            {
              value: "Section 1",
              render: (value) => {
                return <div>{value}</div>;
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
            {
              value: {
                num: 10,
                dec: 20,
              },
              render: (value) => {
                return (
                  <div>
                    {value.num} / {value.dec}
                  </div>
                );
              },
            },
          ],
        ]}
      />
    </>
  );
};
