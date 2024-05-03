export default buildUI = (instrument)=> {

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
}