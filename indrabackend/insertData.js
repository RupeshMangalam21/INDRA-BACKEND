// Sample data for "Locations" collection
const locationsData = [
    {
      "name": "Location 1",
      "latitude": 123.456789,
      "longitude": 987.654321,
    },
    {
      "name": "Location 2",
      "latitude": 456.123789,
      "longitude": 654.987321,
    },
    // Add more sample data as needed
  ];
  
  // Insert the sample data into the "Locations" collection
  db.Locations.insertMany(locationsData);
  
  // Sample data for "Predictions" collection
  const predictionsData = [
    {
      "location": ObjectId("5f5b9e06c32c123456789abc"),
      "timestamp": ISODate("2023-09-30T12:00:00Z"),
      "probability": 0.85,
    },
    {
      "location": ObjectId("5f5b9e06c32c123456789def"),
      "timestamp": ISODate("2023-09-30T13:00:00Z"),
      "probability": 0.75,
    },
    // Add more sample data as needed
  ];
  
  // Insert the sample data into the "Predictions" collection
  db.Predictions.insertMany(predictionsData);
  