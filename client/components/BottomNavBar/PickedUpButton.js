require('../../public/styles/styles.css');

export function PickedUpButton({ pickedUp }) {
		console.log('CONFIRM WORKS TOO!', pickedUp)
  return (
    <div className='PickedUp' onClick={pickedUp}>
			<section className='hero is-success'>
				<div className='hero-content4'>
					<h2 className='button is-success'>
					Picked Up!
					</h2>
				</div>
      </section>
    </div>
  );
}	