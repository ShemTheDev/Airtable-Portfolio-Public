import React, { Component } from 'react'
import MyPopover from './MyTooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import PopoverContent from 'react-bootstrap/PopoverContent'
import PopoverTitle from 'react-bootstrap/PopoverTitle'

class AboutButton extends Component {
    
  render() {

    const popoverFocus = (
        <MyPopover id="tooltip-trigger-focus"  title="About this website">
          <div className="">
            <PopoverTitle as="h3">Thanks for looking!</PopoverTitle>
            <PopoverContent>
              <p>This website was built with <strong>React</strong> and uses an <strong>Airtable spreadsheet</strong> as a backend.</p>
              <p className="m-0">I wanted to make my portfolio site from scratch but also for it to be easily updateable without having to recompile the whole thing. The Airtable API was a quick and simple way to achieve this!</p>
            </PopoverContent>
            <a target="_blank" rel="noopener noreferrer" href="https://airtable.com/shre8qIxVeziaXfOQ">
            <PopoverTitle as="h5">
              <p className="text-center m-0">
              Check out the spreadsheet >
              </p>
              </PopoverTitle>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://airtable.com/shre8qIxVeziaXfOQ">
              <PopoverTitle as="h5">
              <p className="text-center m-0">
              View Github repo >
              </p>
              </PopoverTitle>
              </a>
          </div>
        </MyPopover >
    );

    return (
      <span className="float">
          <OverlayTrigger trigger="focus" placement="bottom" overlay={popoverFocus}>
		  <button className="btn btn-default bg-transparent">
            <svg version="1.1" id="Capa_1" fill="#0065a9" role="img" width="32" height="32" xmlns="http://www.w3.org/2000/svg"
	 viewBox="0 0 431.855 431.855">
<g>
	<path d="M215.936,0C96.722,0,0.008,96.592,0.008,215.814c0,119.336,96.714,216.041,215.927,216.041
		c119.279,0,215.911-96.706,215.911-216.041C431.847,96.592,335.214,0,215.936,0z M231.323,335.962
		c-5.015,4.463-10.827,6.706-17.411,6.706c-6.812,0-12.754-2.203-17.826-6.617c-5.08-4.406-7.625-10.575-7.625-18.501
		c0-7.031,2.463-12.949,7.373-17.745c4.91-4.796,10.933-7.194,18.078-7.194c7.031,0,12.949,2.398,17.753,7.194
		c4.796,4.796,7.202,10.713,7.202,17.745C238.858,325.362,236.346,331.5,231.323,335.962z M293.856,180.934
		c-3.853,7.145-8.429,13.306-13.737,18.501c-5.292,5.194-14.81,13.924-28.548,26.198c-3.788,3.463-6.836,6.503-9.12,9.12
		c-2.284,2.626-3.991,5.023-5.105,7.202c-1.122,2.178-1.983,4.357-2.593,6.535c-0.61,2.17-1.528,5.999-2.772,11.469
		c-2.113,11.608-8.754,17.411-19.915,17.411c-5.804,0-10.681-1.894-14.656-5.69c-3.959-3.796-5.934-9.429-5.934-16.907
		c0-9.372,1.455-17.493,4.357-24.361c2.886-6.869,6.747-12.892,11.543-18.086c4.804-5.194,11.274-11.356,19.427-18.501
		c7.145-6.251,12.307-10.965,15.485-14.144c3.186-3.186,5.861-6.73,8.031-10.632c2.187-3.91,3.26-8.145,3.26-12.721
		c0-8.933-3.308-16.46-9.957-22.597c-6.641-6.137-15.209-9.21-25.703-9.21c-12.282,0-21.321,3.097-27.125,9.291
		c-5.804,6.194-10.705,15.314-14.729,27.369c-3.804,12.616-11.006,18.923-21.598,18.923c-6.251,0-11.526-2.203-15.826-6.609
		c-4.292-4.406-6.438-9.177-6.438-14.314c0-10.6,3.406-21.346,10.21-32.23c6.812-10.884,16.745-19.899,29.807-27.036
		c13.054-7.145,28.296-10.722,45.699-10.722c16.184,0,30.466,2.991,42.854,8.966c12.388,5.966,21.963,14.087,28.718,24.361
		c6.747,10.266,10.128,21.427,10.128,33.482C299.635,165.473,297.709,173.789,293.856,180.934z"/>
</g>
</svg>
            </button>
          </OverlayTrigger>

      </span>
    );
  }
  }
  
  export default AboutButton
  