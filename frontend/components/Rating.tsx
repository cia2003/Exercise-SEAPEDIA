'use client';
import { Text } from "@/components/Text";
import { ComponentPropsWithoutRef, useState } from "react";
import { Star as LucideStar } from "lucide-react";
import './Rating.css';

interface StarProps {
  disabled: boolean,
  size: 12 | 18,
}

function Star(props: StarProps) {
  return (
    <LucideStar
      className={`rating__star ${!props.disabled ? '' : 'rating__star--disabled'}`}
      width={props.size}
      height={props.size}
    />
  );
}

interface RatingDisplayProps extends ComponentPropsWithoutRef<"div"> {
  rating: number,
};

export function RatingDisplay(props: RatingDisplayProps) {
  var ratingValue = props.rating;
  return (
    <div className="rating">
      <span className="rating__stars">
        {Array.from({ length: Math.floor(ratingValue) }, (_, _index) => (
          <Star disabled={false} size={18} />
        ))}
        {Array.from({ length: 5 - Math.floor(ratingValue) }, (_, _index) => (
          <Star disabled={true} size={18} />
        ))}
      </span>
      <Text variant="base">{ratingValue.toFixed(1)}</Text>
    </div>
  );
}