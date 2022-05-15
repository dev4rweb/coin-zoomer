import React from 'react';
import {Line} from 'react-chartjs-2';
// https://react-chartjs-2.js.org/docs/working-with-datasets

const ChartBlock = () => {

    return (
        <div>
            <Line
                datasetIdKey='id'
                data={{
                    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
                    datasets: [
                        {
                            id: 1,
                            label: 'One',
                            borderColor: 'rgb(28,252,3)',
                            // backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            data: [2, 3, 5, 4, 5, 5, 5, 7, 9, 10, 8, 11, 13],
                        },
                        {
                            id: 2,
                            label: 'Two',
                            borderColor: 'rgb(248,100,34)',
                            // backgroundColor: 'rgba(53, 162, 235, 0.5)',
                            data: [1, 2, 3, 4, 5, 4, 3, 4, 5, 6, 8, 10, 13],
                        },
                        {
                            id: 3,
                            label: 'Three',
                            borderColor: 'rgb(248,187,5)',
                            // backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            data: [0, 0, 0, 2, 5, 4, 3, 2, 1, 4, 7, 10, 8],
                        },
                        {
                            id: 4,
                            label: 'Four',
                            borderColor: 'rgb(191,219,243)',
                            // backgroundColor: 'rgba(53, 162, 235, 0.5)',
                            data: [3, 3, 0, 2, 5, 2, 1, 4, 5, 4, 7, 9, 8],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default ChartBlock;
