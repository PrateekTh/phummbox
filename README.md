# Phummbox

This projects aims to try and create a very simple audio sequencer-cum-mixer (*game*), inspired by Jummbox in the browser, based on:

- Phaser 3 [Game Engine to manage sprites and gameplay loops]
- Tone.js [Sound Manipulation library]

### Status: 
  - Added and integrated the two main libraries.
  - Implemented the UI and functionality to play a particular octave, using Synths on Toner.
    
    <img src="https://github.com/PrateekTh/phummbox/assets/57175545/ea940c99-5a89-40e2-9b43-8404c33a9945" height = 300>
  
  - Also added continuous rows of the same, in order to be able to track the time loop over the track.

> I think I have a choice, at this point:
> - I could continue to add a custom time loop, in phaser, and add a flag to check/update the state of each note, and thus complete a basic sequencer. Eventually I can then easily build the UI multiple times for each function. The problem with this approach is that I think I am not using enough game engine features to justify the use of phaser for this project.
> - The other way is to try and use toner's in built sequencer features, and try to make use of more game oriented features in Phaser.

  The second path seems more desirable, the major step being trying to figure out a game mechanic that ties in with the music-looping and sequencing part. This is pretty interesting, and I'll try to come up with a cool design in this sense. One thing that directly comes to my mind as inspiration is the rhythm part of the indie game - [Everhood: An Ineffable Tale of the Inexpressible Divine Moments of Truth](https://www.youtube.com/watch?v=iknL_MyBr_8) (Everhood in short). I am making it in a browser, and also I want to make the player use the sequencer, so definitely it will be quite different as well.
