import React from 'react'
import { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoMdArrowDropup } from 'react-icons/io'
import { AiFillMinusCircle } from 'react-icons/ai'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { SlCalender } from 'react-icons/sl'

import "./Dropdown.css"

function Dropdown({ name, count }) {

    const [isActive, setIsActive] = useState(false)
    const [selected, setSelected] = useState("")
    const [rooms, setRooms] = useState(0)
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)

    const options = [
        [
            "10th Jan",
            "11th Jan",
            "12th Jan",
        ],
        [
            "18th Jan",
            "19th Jan",
            "20th Jan",
        ],
        [
            "2 adults 1 child"
        ]
    ]

    if(count === 2)
    {
        return (
            <div className='dropdown-main'>
                <div className="dropdown-btn room-btn" onClick={() => setIsActive(!isActive)}> 
                        {`${adults} Adults ${children} Children ${rooms} Rooms`}
                        <span>{isActive?<IoMdArrowDropup/>:<IoMdArrowDropdown/>}</span>
                </div>
                {isActive && (
                <div className="dropdown-list">
                    <div className="dropdown-item">
                        Adults
                        <div className='btn-area'>
                            <span onClick={() => setAdults(adults===0? 0: adults-1)}><AiFillMinusCircle/></span>
                            {adults}
                            <span onClick={() => setAdults(adults+1)}><BsFillPlusCircleFill/></span> 
                        </div>
                    </div>
                    <div className="dropdown-item">
                        Children
                        <div className='btn-area'>
                            <span onClick={() => setChildren(children===0? 0: children-1)}><AiFillMinusCircle/></span>
                            {children}
                            <span onClick={() => setChildren(children+1)}><BsFillPlusCircleFill/></span> 
                        </div>
                    </div>
                    <div className="dropdown-item">
                        Rooms
                        <div className='btn-area'>
                            <span onClick={() => setRooms(rooms===0? 0: rooms-1)}><AiFillMinusCircle/></span>
                            {rooms}
                            <span onClick={() => setRooms(rooms+1)}><BsFillPlusCircleFill/></span> 
                        </div>
                    </div>
                </div>
                )}
            </div>
          )
    }

    const option = options[count]

    const onClickHandler = item => {
        setSelected(item)
        setIsActive(!isActive)
    }


    return (
        <div className='dropdown-main'>
            <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}> 
                    <span><SlCalender/></span>
                    {selected!==""? selected: name}
                    <span>{isActive?<IoMdArrowDropup/>:<IoMdArrowDropdown/>}</span>
            </div>
            {isActive && (
            <div className="dropdown-list">
                {option.map((item) => <div className="dropdown-item" onClick={() => onClickHandler(item)}>{item}</div>)}
            </div>
            )}
        </div>
    )
}

export default Dropdown
