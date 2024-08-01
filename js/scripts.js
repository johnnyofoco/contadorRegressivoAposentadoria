function calculateTimeDifference(startDate, endDate) {
  let diff = endDate - startDate;

  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth();
  const days = endDate.getDate() - startDate.getDate();
  const hours = endDate.getHours() - startDate.getHours();
  const minutes = endDate.getMinutes() - startDate.getMinutes();
  const seconds = endDate.getSeconds() - startDate.getSeconds();

  return { years, months, days, hours, minutes, seconds };
}

function updateCountdown() {
  const startDate = new Date(); //dataAtual
  const endDate = new Date(2031, 8, 27);

  let { years, months, days, hours, minutes, seconds } =
    calculateTimeDifference(startDate, endDate);

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }

  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }

  if (hours < 0) {
    hours += 24;
    days -= 1;
  }

  if (days < 0) {
    const previousMonth = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      0
    );
    days += previousMonth.getDate();
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  document.getElementById(
    "countdown"
  ).innerText = `Faltam: ${years} ano(s), ${months} mes(es), ${days} dia(s), ${hours} hora(s), ${minutes} minuto(s) e ${seconds} segundo(s)`;
  console.log("atualizou...");
}

setInterval(updateCountdown, 1000); // Atualiza a cada segundo
updateCountdown(); // Chamada inicial
