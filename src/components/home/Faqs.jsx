import React from 'react';

const Faqs = () => {
  return (
    <div>
      <h1 className="text-center text-3xl m-5">Frequently Asked Questions</h1>
      
      
      <div className="collapse collapse-plus bg-base-200 mb-4">
        <input type="radio" name="my-accordion-3" defaultChecked /> 
        <div className="collapse-title text-xl font-medium">
          How do I create a travel itinerary?
        </div>
        <div className="collapse-content"> 
          <p>To create a travel itinerary, navigate to the "Generator" section of our app and enter your destination, budget, and other details. Then click on the "Generate" button to get a day-wise itinerary for your trip.</p>
        </div>
      </div>
      
      <div className="collapse collapse-plus bg-base-200 mb-4">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          Can I customize the generated itinerary?
        </div>
        <div className="collapse-content"> 
          <p>Yes, you can customize the generated itinerary by adding or removing activities or adjusting the budget allocation according to your preferences.</p>
        </div>
      </div>
      
      <div className="collapse collapse-plus bg-base-200 mb-4">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          Is there a way to save my itinerary?
        </div>
        <div className="collapse-content"> 
          <p>Yes, we do save your itinerary and it can be viewed whenever you wish</p>
        </div>
      </div>
      
      
      <div className="collapse collapse-plus bg-base-200 mb-4">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          How far in advance should I create my travel itinerary?
        </div>
        <div className="collapse-content"> 
          <p>It is recommended to create your travel itinerary at least a few weeks in advance to ensure that you have enough time to make necessary arrangements and bookings. However, you can also create a last-minute itinerary if needed.</p>
        </div>
      </div>
      
      <div className="collapse collapse-plus bg-base-200 mb-4">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
            How accurate are the travel itineraries generated by the app?
        </div>
        <div className="collapse-content"> 
        <p>The accuracy of the generated travel itineraries depends on various factors such as the availability of data, user input, and the algorithm used by the app. While we strive to provide accurate and reliable itineraries, users should also use their discretion and verify information before making travel plans.</p>
        </div>
      </div>
      
      <div className="collapse collapse-plus bg-base-200 mb-4">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          Are there any hidden fees associated with using the app?
        </div>
        <div className="collapse-content"> 
          <p>No, there are no hidden fees associated with using our app. It is free to download and use, and we do not charge any additional fees for generating or customizing travel itineraries.</p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
