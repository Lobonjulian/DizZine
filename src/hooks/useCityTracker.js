import { useEffect, useState } from "react";

export const useCityTracker = () => {
  const [activityCityId, setActivityCityId] = useState(null);
  const [viewCounts, setViewCounts] = useState({});

  const handleCityVisible = (id) => {
    if (id !== activityCityId) {
      setActivityCityId(id);
    }
  };

  useEffect(() => {
    if (activityCityId) {
      setViewCounts((prevCounts) => {
        const newCounts = { ...prevCounts };
        newCounts[activityCityId] = (newCounts[activityCityId] || 0) + 1;
        return newCounts;
      });
    }
  }, [activityCityId]);

  return { activityCityId, viewCounts, handleCityVisible };
};
