
var timer;
function startTimer(f) {
    timer = setInterval(f, 50);
}
  
function stopTimer() {
    clearInterval(timer); 
}


// path/to/audio
// id of object 
var _currentAvatarId = null;
var isPlaying = false;
var _currentCallBackOnEnded;

var analyser;
  async function StartAudioAndUpdatingMouth(_idEl, _audioPath, _callback=null)
  {
    if(isPlaying){return;}
    else{isPlaying = true;}

    _currentAvatarId = _idEl;
    //_audioPath = 'audio.mp3'

    const audioContext = new AudioContext();
    const response = await fetch(_audioPath)
    const soundBuffer = await response.arrayBuffer()
    const sampleBuffer = await audioContext.decodeAudioData(soundBuffer)

    analyser = audioContext.createAnalyser();
    const sampleSource = audioContext.createBufferSource()
    sampleSource.buffer = sampleBuffer

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    sampleSource.connect(analyser);
    analyser.connect(audioContext.destination)


    sampleSource.onended = function() {
      sampleSource.stop(0);
      stopTimer();
      UpdateMouth(0);
      isPlaying = false;
      if(_callback){_callback();}
    }

    sampleSource.start()

    function caclculateVolume() {
      analyser.getByteFrequencyData(dataArray)

      let sum = 0;
      for (const amplitude of dataArray) {
      sum += amplitude * amplitude
      }

      const volume = Math.sqrt(sum / dataArray.length)
      UpdateMouth(volume);
    }

    startTimer(caclculateVolume);

  }
   
  var _lastValue = 0;
  function UpdateMouth(_volume)
  {
    if(_volume<40){_value = 0;}else
    {
        var _value;
        if (_volume < _lastValue)
        {
            _value = getRandomArbitrary(0,0.4);
        }
        else
        {
            _value = getRandomArbitrary(0.6,0.99);
        }
    }
    if(_value>0.99){_value = 0.99};

    var me = document.getElementById(_currentAvatarId);
    var _animationData = "property:gltf-morph__mouthOpen.value; to:" + _value + "; dur:5";
    me.setAttribute("animation", _animationData);
    _lastValue = _volume;
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }