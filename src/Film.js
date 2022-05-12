import React from "react";

export default function Film(props) {
    console.log(props.item)
    return (
        <li data-grade={props.item.rating} data-title={props.item.title}>
            {props.item.title}
            <img src="/images/delete.png" alt="Delete movie" className="delete-movie float-end" onClick={() => props.deleteMovie(props.item.id)}></img>
            {[...Array(parseInt(props.item.rating)).keys()].map(i => <img src="images/star.png" alt="Star" className="float-end"/>)}
        </li>
    )
}