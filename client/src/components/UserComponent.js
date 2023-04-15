import React from 'react'
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'

const UserComponent = () => {
    return (
        <div>
            <div className='userBox'>

                <div className='mainBox'>
                    <div id='box1'>
                        <h1>EMS</h1>
                        <div className='arrowsContainer'>
                            <div className='arrow'>
                                <FaLessThan />
                            </div>
                            <div className='arrow'>
                                <FaGreaterThan />
                            </div>
                        </div>
                    </div>
                    <div id='box2'>
                        <div className='userDetailsBox'>
                            <div className='imgCon'>
                            </div>

                            <div className='userDetails'>
                                <p>Name:xxxxxx</p>
                                <p>Id:xxxxxx</p>
                                <p>Phone No:xxxxxx</p>
                            </div>

                        </div>
                    </div>

                </div>


                <div className='dayDetailsBox'>
                    <p>Day:xxxxxx</p>
                    <p>Date:xxxxxx</p>
                </div>

            </div>

        </div>
    )
}

export default UserComponent
