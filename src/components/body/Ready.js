import React from "react";
import ReadyBox from "./com/ReadyBox";
import ReadyData from "./data/ReadyData";

function Ready() {
    return (<>

        {ReadyData.map(({ index, qty, linex, date, po, comm }) => {
            return (
                <>
                    <ReadyBox key={index} linex={linex} qty={qty} date={date} po={po} comm={comm} />


                </>

            )
        })}

    </>)
}
export default Ready;