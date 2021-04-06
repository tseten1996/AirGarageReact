import React from "react";
import Card from "./Card";

export default function CardList({ results }) {
    let data = [];
    if (results.data) {
        data = results.data.businesses || [];
    }
    return (
        <div className="result">
            {data.map((item) => 
                item.rating < 4 ?
                (
                    <Card key ={item.id} business={item} />
                ) : ''
            )}
        </div>
    )
}