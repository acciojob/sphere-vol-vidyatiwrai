function volume_sphere() {
const radiusInput = document.getElementById('radius');
const volumeOutput = document.getElementById('volume');
const radius = parseFloat(radiusInput.value);
const volume = (4/3)*Math.PI*Math.pow(radius, 3);
volumeOutput.value = parseFloat(volume.toFixed(4));
}

document.getElementById('MyForm').addEventListener('submit', function(event) {
event.preventDefault();
volume_sphere();
});
