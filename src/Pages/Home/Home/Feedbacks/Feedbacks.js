import React from 'react';
import customer1 from '../../../../Images/Customer/customer1.jpg'
import customer2 from '../../../../Images/Customer/customer2.jpg'
import customer3 from '../../../../Images/Customer/customer3.jpg'
import Feedback from '../Feedback/Feedback';



const feedbacks = [
    { id: 1, name: 'Abu Raihan', img: customer1 },
    { id: 2, name: 'Mahedi Hasan', img: customer2 },
    { id: 3, name: 'Kajal Khan', img: customer3 },
]

const Feedbacks = () => {
    return (
        <div id='feedback' className='container' >
            <h2 className='text-secondary text-center mt-5'>Customers Feedback</h2>
            <div className="row">
                {
                    feedbacks.map(feedback => <Feedback
                        key={feedback.id}
                        feedback={feedback}
                    ></Feedback>)
                }

            </div>
        </div>
    );
};

export default Feedbacks;