document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the selected values from the form
    const q1 = parseInt(document.getElementById('q1').value);
    const q2 = parseInt(document.getElementById('q2').value);
    const q3 = parseInt(document.getElementById('q3').value);
    const q4 = parseInt(document.getElementById('q4').value);
    const q5 = parseInt(document.getElementById('q5').value);
    const q6 = parseInt(document.getElementById('q6').value);
    const q7 = parseInt(document.getElementById('q7').value);
    const q8 = parseInt(document.getElementById('q8').value);
    const q9 = parseInt(document.getElementById('q9').value);
    const q10 = parseInt(document.getElementById('q10').value);
    // Add more questions here
    
    // Calculate the mental health percentage
  const totalQuestions = 10; // Change this to the total number of questions
    const sum = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8  + q9 + q10; // Add more question scores here
    // Add more question scores here
    const mentalHealthPercentage = ((sum / (totalQuestions * 3)) * 100).toFixed(2);
    
    // Display the result
    let message = `<h2 >Your Mental Health Percentage: ${mentalHealthPercentage}%</h2>`;
    // Add suggestions based on mental health percentage
    if (mentalHealthPercentage < 50) {
      message += "<p>You should consider seeking professional help.</p>";
      message += "<button onclick='redirectToProfessionalHelp()'>Find Help</button>";
     
    } else if (mentalHealthPercentage >= 50 && mentalHealthPercentage < 70) {
      message += "<p>There's room for improvement. Try some stress-relief techniques like meditation or exercise.</p>";
      message += "<button onclick='redirectToPofHelp()'>Find Help</button>";
    } else {
      message += "<p>You're doing great! Keep up the good work.</p>";
      message += "<button onclick='redtoprofhelp()'>Find Help</button>";
    }
    document.getElementById('result').innerHTML = message;

  });
  function redirectToProfessionalHelp() {
    // Add code to redirect to a professional help website or resource
    window.location.href = "https://www.felicity.care/";
}
function redirectToPofHelp() {
  // Add code to redirect to a professional help website or resource
  window.location.href = "STRESS.html";
}
function redtoprofhelp() {
  // Add code to redirect to a professional help website or resource
  window.location.href = "https://www.felicity.care/";
}
  