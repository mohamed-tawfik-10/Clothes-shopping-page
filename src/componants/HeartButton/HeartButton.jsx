import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export default function HeartButton({ productId, onToggleFavorite, addWich, className }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(productId));
  }, [productId]);

  const handleClick = async () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (!isFavorite && addWich) {
      await addWich(productId); // إضافة للمفضلة
      favorites.push(productId);
    } else {
      const index = favorites.indexOf(productId); // إزالة من المفضلة
      if (index !== -1) favorites.splice(index, 1);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);

    if (onToggleFavorite) {
      onToggleFavorite(productId, !isFavorite);
    }
  };

  return (
    <button onClick={handleClick} className={`p-2 rounded-full transition ${className}`}>
      <Heart
        fill={isFavorite ? 'red' : 'black'}
        color={isFavorite ? 'red' : 'black'}
        className="w-10 h-10"
      />
    </button>
  );
}
