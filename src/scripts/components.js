import React from 'react'
import ReactDOM from 'react-dom'


const AppView = React.createClass ({
	render: function () {
		return (

				<div id = 'appContainer'>

					<Header />
					<Theremin />
					<Moog />
					<VolumeAntenna />
					<Stand />
				
				</div>


			)


	}

})

const Theremin = React.createClass ({
	render: function () {
		return ( 

			<div id = 'thereminContainer'>

				<canvas id = 'theremin'></canvas>
				
				<div id = 'antennaContainer'>
					
					<div id = 'antennaTop'></div>
					<div id = 'antenna'></div>
					

				</div>


			</div>


		)


	}


})

const Header = React.createClass ({
	render: function () {
		return ( 
			
			<div id = 'headerContainer'>
				
				<h1 className='font-effect-neon'>The Theremin</h1>
				<h2>Make some noise with the cross cursor...</h2>

			</div>
			
			)

	}
})

const Moog = React.createClass ({
	render: function () {
		return (

			<div id = 'moogContainer'>

				<div id = 'sidePanel1'></div>
					<div id = 'controlPanelContainer'>

						<div className = 'knob'></div>
						<div className = 'knob'></div>
						<div className = 'knob'></div>

					</div>
				<div id = 'sidePanel2'></div>

			</div>


			)


	}


})

const VolumeAntenna = React.createClass ({
	render: function () {
		return (

			<div id = 'volumeAntenna'></div>

			)

	}


})

const Stand = React.createClass ({
	render: function () {
		return (

				<div id = "stand"></div>

			)



	}

})

ReactDOM.render(<AppView />, document.querySelector('.container'))

export default AppView
	
