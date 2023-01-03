import React from 'react'
import './HotelRules.css'

function HotelRules() {
  return (
    <div className='hotelrules'>
        <h3>Property Rules</h3>
        <p>Check-in: 12PM Check-out: 12PM</p>

        <div className="rules">

            <div className="rules1">
                <ul>
                    <li>Guest with fever are not allowed</li>
                    <li>Guest with containment zones are not allowed</li>
                    <li>Guest below 18 years of age are not allowed to be on the property alone</li>
                    <li>PAN Card and Non-Gov IDs are not accepted as ID proof(s)</li>
                    <li>Aadhar, Driving License and Govt ID are accepted as ID proof(s)</li>
                    <li>Property staff is trained on hygiene guidelines</li>
                    <li>Pets are not allowed</li>
                    <li>Outside food is not allowed</li>
                    <li>Smoking whithin the premises is not allowed</li>
                    <li>Does not allow private parties or events</li>
                    <li>Quarantine protocols are being followed as per local government authorities</li>
                </ul>
            </div>

            <div className="rules2">
                <ul>
                    <li>Outside food is not allowed</li>
                    <li>Drinking within the premises is not allowed</li>
                    <li>Disturbing other customers can get you removed from premises</li>
                    <li>Noise above a certain limit can get you removed</li>
                    <li>Taking hotel property is not allowed</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HotelRules
