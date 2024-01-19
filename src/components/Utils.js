export function formatDateTime(inputDateTime) {
    const parsedDate = inputDateTime instanceof Date ? inputDateTime : new Date(inputDateTime);
  
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
  
    return new Intl.DateTimeFormat('en-US', options).format(parsedDate);
  }
  