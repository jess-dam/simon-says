import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

function ColourCell({ colourToFlash, colour, setUserSequence, userSequence }){
    let buttonColour = ''
    //action for flashing colour sequence
    if(colourToFlash == colour) {


        switch (colour) {
            case 'Red': buttonColour = 'danger'
            break

            case 'Yellow': buttonColour = 'warning'
            break

            case 'Green': buttonColour = 'success'
            break

            case 'Blue': buttonColour = 'primary'
            break
        }


    }

    //action for user input
    else{
        switch (colour) {
            case 'Red': buttonColour = 'outline-danger'
            break

            case 'Yellow': buttonColour = 'outline-warning'
            break

            case 'Green': buttonColour = 'outline-success'
            break

            case 'Blue': buttonColour = 'outline-primary'
            break
        }
    }


    return(
        <>
        <Button
            variant = {buttonColour}
            onClick = { () => {
                //onClick function should only be available when the computer sequence has stopped showing
                if(!colourToFlash){
                    //computerSequence should hide when the user begins adding their sequence
                    console.log(colour,userSequence) //userSequence is undefined here
                    setUserSequence(addToUserSequence(colour, userSequence))
                    console.log(`userSequence is:  ${addToUserSequence(colour, userSequence)}`)
                }
        }}>
            {colour}
        </Button>
        </>

    )
}

export default ColourCell


const addToUserSequence = (colour, userSequence) => {
    let userSequenceClone =  [...userSequence]
    userSequenceClone.push(colour)
    //console.log(`The colour ${colour} has been added to this array here: ${userSequenceClone}`)
    //console.log(`Here is the original array ${userSequence}`)
    //console.log(typeof userSequence)
    return(
        userSequenceClone
    )
}

