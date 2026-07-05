 document.addEventListener("DOMContentLoaded", () => {
            const track = document.getElementById("marqueeTrack");
            // Clone the inner HTML of the track and append it to itself to create an infinite, gapless scroll
            track.innerHTML += track.innerHTML;
        });