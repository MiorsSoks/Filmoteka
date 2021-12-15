let queueList = [];
let watchedList = [];

export function getQueueList() {
  if (
    !localStorage.getItem('queueList') ||
    JSON.parse(localStorage.getItem('queueList')).length === 0
  ) {
    console.log('empty');
    return [];
  } else {
    return (queueList = JSON.parse(localStorage.getItem('queueList')));
  }
}

export function getWatchedList() {
  if (
    !localStorage.getItem('watchedList') ||
    JSON.parse(localStorage.getItem('watchedList')).length === 0
  ) {
    console.log('empty');
    return [];
  } else {
    return (watchedList = JSON.parse(localStorage.getItem('watchedList')));
  }
}

