// Einfache Animation beim Laden
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website erstellt von Claude AI!');
    
    // Füge einen kleinen Interaktionseffekt hinzu
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Zeige eine Willkommensnachricht in der Konsole
    console.log('%c🤖 Hallo! Diese Website wurde von Claude AI erstellt!', 'color: #667eea; font-size: 20px; font-weight: bold;');
});