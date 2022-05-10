
    var loop_index = 0;// indicates loop status (1 for true, 0 for false)
    var wave_colors = ['orange', 'red', 'green', 'blue', 'brown', 'yellow', 'cyan', 'grey', 'pink'];//diff wave colors
    var mp3_names = ['B VOC.mp3','DRUMS.mp3','HE HE VOC.mp3','HIGH VOC.mp3',
    'JIBRISH.mp3','LEAD 1.mp3','UUHO VOC.mp3','_tambourine_shake_higher.mp3','ALL TRACK.mp3'];//diff wave names
    var wave_index = 1;//waves index
    for (wave_index; wave_index<=wave_colors.length;wave_index++){ //creates waves instances in a loop.
        var wave_name = 'wavesurfer' + wave_index;
        window[wave_name] = WaveSurfer.create({
            container: '#waveform',
            interact: false,
            height: 60,
            waveColor: wave_colors[wave_index-1],
            progressColor: 'purple',
            scrollParent: true,
            backgroundColor: 'black',
            barGap: 1,
            barWidth: 2,
            barHeight: 4,
            responsive: true,
            cursorWidth: 1,
            cursorColor: 'white',
        });
        window[wave_name].load(mp3_names[wave_index-1]);
    }
    function play(){// function that start playing all tracks and changes play button to green
        var play = document.querySelector('.play');
        play.style.backgroundColor = 'lightgreen';
            wavesurfer1.play();
            wavesurfer2.play();
            wavesurfer3.play();
            wavesurfer4.play();
            wavesurfer5.play();
            wavesurfer6.play();
            wavesurfer7.play();
            wavesurfer8.play();
            wavesurfer9.play();
    }
    function stop(){// function that stops all tracks and moves cursor to the beginning
        var play = document.querySelector('.play');
        var stop = document.querySelector('.stop');
        play.style.backgroundColor = 'white';
            wavesurfer1.stop();
            wavesurfer2.stop();
            wavesurfer3.stop();
            wavesurfer4.stop();
            wavesurfer5.stop();
            wavesurfer6.stop();
            wavesurfer7.stop();
            wavesurfer8.stop();
            wavesurfer9.stop();
    }
    function mute(num){ // function that mute and unmute track from click knowledge
        var wavesurfer = ("wavesurfer" + num);
        var mute_btn_name = ('mute' + num + '_btn');
        var mute_btn_name = document.querySelector('.'+ mute_btn_name);
        window[wavesurfer].toggleMute();
        wave_color_change(wavesurfer, num);
        if (window[wavesurfer].getMute() == false)//1 isn't muted
            {mute_btn_name.style.backgroundColor = 'lightgreen';}
            else{mute_btn_name.style.backgroundColor = 'lightcoral';}
    }
    function wave_color_change(wavesurfer, num){// function that changes waves style according to mute status
        if (window[wavesurfer].getMute() == true){ //is muted
            window[wavesurfer].setProgressColor('white');
            window[wavesurfer].setWaveColor('white');
            }
            else{ // isn't muted
            window[wavesurfer].setProgressColor('purple');
            window[wavesurfer].setWaveColor(wave_colors[num-1]);
            }
    }
    function loop_toggle(){ // function that toggles loop status (yellow "1" for loop, white "0" for standard)
        var loop = document.querySelector('.loop');
        if (loop_index==0) {
            loop.style.backgroundColor = 'yellow';
            loop_index = 1;
        }
        else{
            loop.style.backgroundColor = 'white';
            loop_index = 0;
        } 
    }
    wavesurfer9.on('finish', function (){ // function that loops all tracks if loop status is true
        if (loop_index == 1){
        play();
        }
        else{
            stop();
        }
    })
    wavesurfer9.on('ready', function (){ // function that initiate wave 9 "all track mp3" as muted.
        wavesurfer9.setMute('true');
        wavesurfer9.setProgressColor('white');
        wavesurfer9.setWaveColor('white');
    })
