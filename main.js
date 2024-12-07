const sources = document.querySelectorAll('.source');
const destinations = document.querySelectorAll('.destination');

let draggedItem = null;

// Drag start event
sources.forEach(source => {
  source.addEventListener('dragstart', () => {
    draggedItem = source;
    setTimeout(() => source.classList.add('dragging'), 0);
  });

  source.addEventListener('dragend', () => {
    source.classList.remove('dragging');
    draggedItem = null;
  });
});

// Drag over and drop for destinations
destinations.forEach(destination => {
  destination.addEventListener('dragover', e => {
    e.preventDefault();
    destination.classList.add('drag-over');
  });

  destination.addEventListener('dragleave', () => {
    destination.classList.remove('drag-over');
  });

  destination.addEventListener('drop', () => {
    destination.classList.remove('drag-over');
    if (draggedItem && !destination.querySelector('.source')) {
      destination.appendChild(draggedItem);
    }
  });
});
