import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
        this.notes = [
            "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"
        ];

        //UI control variables
        this.columns = 16;
        this.rows = 12;
        this.boxSize = 40;
        this.cellSpacing = 4;
        this.totalBoxWidth = (this.boxSize + this.cellSpacing) * this.columns - this.cellSpacing;
    }

    preload(){
    }

    buildUI(instrument){

        const octave = "3";
        const initialxPos = (this.sceneWidth - this.totalBoxWidth) / 2;

        let yPos = 100;
        for (let y = 0; y < this.rows; y++) {
            let xPos = initialxPos;
            for (let x = 0; x < this.columns; x++) {  

                const box = this.add.rectangle(xPos, yPos, this.boxSize, this.boxSize/1.6, 0xA5BE00).setInteractive();  
                xPos += (this.boxSize + this.cellSpacing); 
                box.note = this.notes[this.rows-y-1]

                box.on('pointerdown', () => {
                    if(Tone.context.state != "running"){
                        Tone.start();
                    }
                    instrument.triggerAttackRelease(box.note + octave,"8n")
                    console.log('Box clicked:', x, y);
                });
        
              this.uiGroup.add(box);
            }

            yPos += (this.boxSize + this.cellSpacing)/1.6;
        }
        
        //It will probably be better to use the tone.js sequencer, but I implemented the basic UI for experience, ig
    }

    create ()
    {
        this.sceneWidth = this.cameras.main.width;
        this.uiGroup = this.add.group();

        const synth = new Tone.Synth().toDestination()
        this.buildUI(synth);

        this.cameras.main.setBackgroundColor(0x5D5F71);
    }
}
