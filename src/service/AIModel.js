import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDqmc9g6r52tR3p7FeXeRwtQuteGqBlvZA");

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,

  history: [
    {
      role: "user",
      parts: [
        {text: "Generate Travel Plan for Location : Jaipur, Rajasthan, India, for 3 Days for 2 People with a Moderate budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel for each of the location for 3 with each day plan with best time to visit in JSON format and itinerary in Array format\n"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"The Fern Residency Jaipur\",\n      \"hotelAddress\": \"Plot No. 50/51, Near City Palace, Jhotwara, Jaipur, Rajasthan 302012\",\n      \"price\": \"₹3,000 - ₹5,000\",\n      \"hotelImageUrl\": \"https://www.thefernhotels.com/media/images/hotel-images/fern-residency-jaipur-jaipur-hotel-room.jpg\",\n      \"geoCoordinates\": \"26.9225, 75.8283\",\n      \"rating\": 4.5,\n      \"description\": \"A modern hotel with a rooftop pool and restaurant, offering spacious rooms with city views.\"\n    },\n    {\n      \"hotelName\": \"Radisson Blu Jaipur\",\n      \"hotelAddress\": \"B-3, JLN Marg, Near Civil Lines, Jaipur, Rajasthan 302001\",\n      \"price\": \"₹4,000 - ₹7,000\",\n      \"hotelImageUrl\": \"https://www.radissonhotels.com/en-us/hotels/radisson-blu-jaipur-city-centre/photos\",\n      \"geoCoordinates\": \"26.9202, 75.8259\",\n      \"rating\": 4.2,\n      \"description\": \"A stylish hotel with multiple dining options, a spa, and a fitness center, located near the city center.\"\n    },\n    {\n      \"hotelName\": \"Hotel Clarks Amer\",\n      \"hotelAddress\": \"Near Amber Fort, Amer, Jaipur, Rajasthan 302028\",\n      \"price\": \"₹2,500 - ₹4,500\",\n      \"hotelImageUrl\": \"https://www.clarkshotels.com/media/images/hotels/clarks-amer-jaipur-hotel-room.jpg\",\n      \"geoCoordinates\": \"26.9961, 75.9666\",\n      \"rating\": 4,\n      \"description\": \"A heritage hotel offering a blend of traditional and modern amenities, located near the Amer Fort.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"plan\": [\n        {\n          \"placeName\": \"Amber Fort\",\n          \"placeDetails\": \"A majestic fort built in the 16th century, known for its intricate architecture and stunning views.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Amer_Fort_jaipur_rajasthan_india.jpg/1280px-Amer_Fort_jaipur_rajasthan_india.jpg\",\n          \"geoCoordinates\": \"26.9961, 75.9666\",\n          \"ticketPricing\": \"₹100 per person\",\n          \"timeToTravel\": \"2-3 hours\",\n \"timeTravel\":\"45 minutes from the city center\"\n        },\n        {\n          \"placeName\": \"Jal Mahal\",\n          \"placeDetails\": \"A beautiful palace located in the middle of Man Sagar Lake, offering scenic views.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jal_Mahal_from_Man_Sagar_Lake_Jaipur_Rajasthan_India.jpg/1024px-Jal_Mahal_from_Man_Sagar_Lake_Jaipur_Rajasthan_India.jpg\",\n          \"geoCoordinates\": \"26.9253, 75.8283\",\n          \"ticketPricing\": \"Free\",\n          \"timeToTravel\": \"1-2 hours\",\n \"timeTravel\":\"45 minutes from the city center\"\n        }\n      ],\n    \n    },\n    {\n      \"day\": 2,\n      \"plan\": [\n        {\n          \"placeName\": \"City Palace\",\n          \"placeDetails\": \"A grand palace complex built in the 18th century, showcasing a blend of Rajasthani and Mughal architecture.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/City_Palace_Jaipur.jpg/1024px-City_Palace_Jaipur.jpg\",\n          \"geoCoordinates\": \"26.9236, 75.8276\",\n          \"ticketPricing\": \"₹70 per person\",\n          \"timeToTravel\": \"2-3 hours\",\n \"timeTravel\":\"45 minutes from the city center\"\n        },\n        {\n          \"placeName\": \"Jantar Mantar\",\n          \"placeDetails\": \"An astronomical observatory built in the 18th century, featuring unique instruments for observing celestial objects.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Jantar_Mantar_Jaipur.jpg/1280px-Jantar_Mantar_Jaipur.jpg\",\n          \"geoCoordinates\": \"26.9230, 75.8279\",\n          \"ticketPricing\": \"₹50 per person\",\n          \"timeToTravel\": \"1-2 hours\",\n \"timeTravel\":\"45 minutes from the city center\"\n        }\n      ],\n\n    },\n    {\n      \"day\": 3,\n      \"plan\": [\n        {\n          \"placeName\": \"Hawa Mahal\",\n          \"placeDetails\": \"A unique palace with 953 windows, designed to allow royal women to observe street life without being seen.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Hawa_Mahal_Jaipur_Rajasthan_India.jpg/1280px-Hawa_Mahal_Jaipur_Rajasthan_India.jpg\",\n          \"geoCoordinates\": \"26.9220, 75.8264\",\n          \"ticketPricing\": \"₹50 per person\",\n          \"timeToTravel\": \"1-2 hours\",\n         \"timeTravel\":\"45 minutes from the city center\"\n        },\n        {\n          \"placeName\": \"Albert Hall Museum\",\n          \"placeDetails\": \"A museum showcasing a wide range of art, artifacts, and sculptures.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Albert_Hall_Museum_Jaipur.jpg/1280px-Albert_Hall_Museum_Jaipur.jpg\",\n          \"geoCoordinates\": \"26.9254, 75.8268\",\n          \"ticketPricing\": \"₹20 per person\",\n          \"timeToTravel\": \"2-3 hours\",\n \"timeTravel\":\"45 minutes from the city center\"\n        }\n      ],\n\n    }\n  ]\n}\n```\n\n**Note:** This is a sample itinerary and can be customized based on your interests and preferences. Hotel prices are approximate and may vary depending on the season and availability. You can book hotels online through websites like Booking.com, Expedia, etc. \n"},
      ],
    },
  ],

});
