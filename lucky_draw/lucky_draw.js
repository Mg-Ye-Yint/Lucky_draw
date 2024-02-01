const photoUrls = [
    'Photo-1.png',
    'Photo-2.png',
    'Photo-3.png',
];

// Track the number of times each photo is displayed
const displayCount = [0, 0, 0];

function displayRandomPhotos() {
    const container = document.getElementById('container');
    const chartImage = document.getElementById('chart');
    const hoveredContainer = document.getElementById('hoveredImageContainer');
    const spinnButton = document.getElementById('button');

    // If 'Close' button already exists, remove it
    const closeBtn = document.getElementById('closeBtn');
    if (closeBtn) {
        closeBtn.parentNode.removeChild(closeBtn);
    }

    // Hide 'Spinnn !' button
    spinnButton.style.display = 'none';

    chartImage.style.display = 'none';
    hoveredContainer.innerHTML = '';

    let photoIndex;

    // Choose a photo randomly based on its display count
    do {
        photoIndex = Math.floor(Math.random() * photoUrls.length);
    } while ((photoIndex === 0 && displayCount[photoIndex] >= 1) || (photoIndex === 1 && displayCount[photoIndex] >= 2));

    // Increment the display count for the chosen photo
    displayCount[photoIndex]++;

    // Display the chosen photo
    const hoveredImgElement = document.createElement('img');
    hoveredImgElement.src = photoUrls[photoIndex];
    hoveredContainer.appendChild(hoveredImgElement);

    // Display 'Close' button
    const closeBtnElement = document.createElement('button');
    closeBtnElement.textContent = 'Close';
    closeBtnElement.id = 'closeBtn';
    closeBtnElement.onclick = resetFunction;
    container.appendChild(closeBtnElement);

    // Update item left count
    updateItemLeftCount(photoIndex);
}

function resetFunction() {
    const chartImage = document.getElementById('chart');
    const hoveredContainer = document.getElementById('hoveredImageContainer');
    const closeBtn = document.getElementById('closeBtn');
    const spinnButton = document.getElementById('button');

    chartImage.style.display = 'block';
    hoveredContainer.innerHTML = '';
    closeBtn.parentNode.removeChild(closeBtn);

    // Show 'Spinnn !' button
    spinnButton.style.display = 'block';
}

function updateItemLeftCount(photoIndex) {
    const appleWatchCountElement = document.getElementById('appleWatchCount');
    const vacuumCleanerCountElement = document.getElementById('vacuumCleanerCount');

    if (photoIndex === 0) { // Apple Watch
        const currentCount = parseInt(appleWatchCountElement.innerText);
        if (currentCount > 0) {
            appleWatchCountElement.innerText = currentCount - 1;
        }
    } else if (photoIndex === 1) { // Vacuum Cleaner
        const currentCount = parseInt(vacuumCleanerCountElement.innerText);
        if (currentCount > 0) {
            vacuumCleanerCountElement.innerText = currentCount - 1;
        }
    }
}