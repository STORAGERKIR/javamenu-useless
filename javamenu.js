<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Utility Dashboard</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #1e1e2c, #2d2d44);
            color: white;
            min-height: 100vh;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container {
            width: 100%;
            max-width: 1000px;
        }

        header {
            text-align: center;
            margin-bottom: 30px;
            padding: 20px;
        }

        h1 {
            font-size: 2.8rem;
            margin-bottom: 10px;
            background: linear-gradient(to right, #4895ef, #4cc9f0);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .subtitle {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.7);
            max-width: 600px;
            margin: 0 auto;
        }

        .dashboard {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
        }

        .card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 25px;
            box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 40px rgba(31, 38, 135, 0.25);
        }

        .card-header {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 2px solid rgba(255, 255, 255, 0.1);
        }

        .card-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #4361ee, #3f37c9);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            color: white;
            font-size: 1.5rem;
        }

        .card-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: white;
        }

        .calculator-display {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 12px;
            padding: 15px;
            margin-bottom: 15px;
            text-align: right;
            font-size: 1.8rem;
            font-weight: 600;
            min-height: 70px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .calculator-keys {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        .btn {
            padding: 15px;
            font-size: 1.2rem;
            border: none;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            cursor: pointer;
            transition: all 0.2s ease;
            font-weight: 600;
        }

        .btn:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        .btn.operator {
            background: linear-gradient(135deg, #4895ef, #4361ee);
            color: white;
        }

        .btn.equals {
            background: linear-gradient(135deg, #4cc9f0, #2ec4b6);
            color: white;
            grid-column: span 2;
        }

        .btn.clear {
            background: linear-gradient(135deg, #f72585, #f15bb5);
            color: white;
        }

        textarea, input, select {
            width: 100%;
            padding: 12px 15px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(0, 0, 0, 0.2);
            font-size: 1rem;
            margin-bottom: 15px;
            transition: all 0.3s ease;
            color: white;
        }

        textarea:focus, input:focus, select:focus {
            outline: none;
            border-color: #4361ee;
            box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
        }

        textarea {
            min-height: 120px;
            resize: vertical;
        }

        .note-actions {
            display: flex;
            gap: 10px;
            margin-top: auto;
        }

        .note-btn {
            flex: 1;
            padding: 12px;
            border-radius: 12px;
            border: none;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .save-btn {
            background: linear-gradient(135deg, #4cc9f0, #2ec4b6);
            color: white;
        }

        .clear-btn {
            background: linear-gradient(135deg, #ff9e00, #ffaa33);
            color: white;
        }

        .weather-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .weather-icon {
            font-size: 4rem;
            margin: 15px 0;
            color: #ff9e00;
        }

        .temperature {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 10px;
        }

        .weather-desc {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 20px;
        }

        .weather-details {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            width: 100%;
        }

        .detail-card {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 12px;
            padding: 15px;
            text-align: center;
        }

        .detail-value {
            font-size: 1.5rem;
            font-weight: 700;
            color: #4cc9f0;
        }

        .detail-label {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
        }

        .converter-container {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .converter-row {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .converter-row select {
            flex: 1;
        }

        .converter-row input {
            flex: 2;
        }

        .switch-btn {
            background: #4361ee;
            color: white;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            margin: 5px auto;
        }

        .footer {
            text-align: center;
            color: rgba(255, 255, 255, 0.6);
            margin-top: 40px;
            padding: 20px;
            font-size: 0.9rem;
        }

        @media (max-width: 768px) {
            .dashboard {
                grid-template-columns: 1fr;
            }
            
            h1 {
                font-size: 2.2rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>JavaScript Utility Dashboard</h1>
            <p class="subtitle">A collection of useful tools - paste into console to run anywhere</p>
        </header>
        
        <div class="dashboard">
            <!-- Calculator Widget -->
            <div class="card">
                <div class="card-header">
                    <div class="card-icon">
                        <i class="fas fa-calculator">➗</i>
                    </div>
                    <h2 class="card-title">Calculator</h2>
                </div>
                <div class="calculator-display" id="display">0</div>
                <div class="calculator-keys">
                    <button class="btn clear">C</button>
                    <button class="btn operator">/</button>
                    <button class="btn operator">×</button>
                    <button class="btn operator">-</button>
                    
                    <button class="btn">7</button>
                    <button class="btn">8</button>
                    <button class="btn">9</button>
                    <button class="btn operator">+</button>
                    
                    <button class="btn">4</button>
                    <button class="btn">5</button>
                    <button class="btn">6</button>
                    <button class="btn">.</button>
                    
                    <button class="btn">1</button>
                    <button class="btn">2</button>
                    <button class="btn">3</button>
                    <button class="btn equals">=</button>
                    
                    <button class="btn">0</button>
                    <button class="btn">00</button>
                </div>
            </div>
            
            <!-- Notes Widget -->
            <div class="card">
                <div class="card-header">
                    <div class="card-icon">
                        <i class="fas fa-sticky-note">📝</i>
                    </div>
                    <h2 class="card-title">Quick Notes</h2>
                </div>
                <textarea id="note" placeholder="Type your notes here..."></textarea>
                <div class="note-actions">
                    <button class="note-btn save-btn">Save Note</button>
                    <button class="note-btn clear-btn">Clear</button>
                </div>
            </div>
            
            <!-- Weather Widget -->
            <div class="card">
                <div class="card-header">
                    <div class="card-icon">
                        <i class="fas fa-cloud-sun">☀️</i>
                    </div>
                    <h2 class="card-title">Weather</h2>
                </div>
                <div class="weather-container">
                    <div class="weather-icon">☀️</div>
                    <div class="temperature">24°C</div>
                    <div class="weather-desc">Sunny</div>
                    <div class="location">San Francisco, CA</div>
                    
                    <div class="weather-details">
                        <div class="detail-card">
                            <div class="detail-value">75%</div>
                            <div class="detail-label">Humidity</div>
                        </div>
                        <div class="detail-card">
                            <div class="detail-value">10 km/h</div>
                            <div class="detail-label">Wind</div>
                        </div>
                        <div class="detail-card">
                            <div class="detail-value">1013 hPa</div>
                            <div class="detail-label">Pressure</div>
                        </div>
                        <div class="detail-card">
                            <div class="detail-value">7:18 PM</div>
                            <div class="detail-label">Sunset</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Unit Converter -->
            <div class="card">
                <div class="card-header">
                    <div class="card-icon">
                        <i class="fas fa-exchange-alt">🔄</i>
                    </div>
                    <h2 class="card-title">Unit Converter</h2>
                </div>
                <div class="converter-container">
                    <div class="converter-row">
                        <input type="number" id="inputValue" placeholder="Enter value" value="1">
                        <select id="inputUnit">
                            <option value="meters">Meters</option>
                            <option value="kilometers">Kilometers</option>
                            <option value="feet">Feet</option>
                            <option value="miles">Miles</option>
                        </select>
                    </div>
                    
                    <button class="switch-btn">
                        <i class="fas fa-exchange-alt">⇅</i>
                    </button>
                    
                    <div class="converter-row">
                        <input type="number" id="outputValue" placeholder="Result" readonly>
                        <select id="outputUnit">
                            <option value="feet">Feet</option>
                            <option value="miles">Miles</option>
                            <option value="meters">Meters</option>
                            <option value="kilometers">Kilometers</option>
                        </select>
                    </div>
                    
                    <button class="btn" style="margin-top: 15px;">Convert</button>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p>JavaScript Utilities • Works when pasted in console</p>
        </div>
    </div>

    <script>
        // Calculator functionality
        let displayValue = '0';
        let firstOperand = null;
        let operator = null;
        let waitingForSecondOperand = false;
        
        // Get all calculator buttons
        const calcButtons = document.querySelectorAll('.calculator-keys .btn');
        const calcDisplay = document.getElementById('display');
        
        // Add event listeners to calculator buttons
        calcButtons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.textContent;
                
                if (button.classList.contains('operator')) {
                    handleOperator(value);
                } else if (button.classList.contains('equals')) {
                    calculate();
                } else if (button.classList.contains('clear')) {
                    clearDisplay();
                } else {
                    appendToDisplay(value);
                }
            });
        });
        
        function updateDisplay() {
            calcDisplay.textContent = displayValue;
        }
        
        function appendToDisplay(value) {
            if (waitingForSecondOperand) {
                displayValue = value;
                waitingForSecondOperand = false;
            } else {
                displayValue = displayValue === '0' ? value : displayValue + value;
            }
            updateDisplay();
        }
        
        function handleOperator(op) {
            const inputValue = parseFloat(displayValue);
            
            if (firstOperand === null) {
                firstOperand = inputValue;
            } else if (operator) {
                const result = performCalculation();
                displayValue = String(result);
                firstOperand = result;
            }
            
            operator = op;
            waitingForSecondOperand = true;
            updateDisplay();
        }
        
        function performCalculation() {
            const secondOperand = parseFloat(displayValue);
            
            switch (operator) {
                case '+':
                    return firstOperand + secondOperand;
                case '-':
                    return firstOperand - secondOperand;
                case '×':
                    return firstOperand * secondOperand;
                case '/':
                    return firstOperand / secondOperand;
                default:
                    return secondOperand;
            }
        }
        
        function calculate() {
            if (operator === null || waitingForSecondOperand) return;
            
            const result = performCalculation();
            displayValue = String(result);
            firstOperand = result;
            operator = null;
            waitingForSecondOperand = true;
            updateDisplay();
        }
        
        function clearDisplay() {
            displayValue = '0';
            firstOperand = null;
            operator = null;
            waitingForSecondOperand = false;
            updateDisplay();
        }
        
        // Notes functionality
        const saveBtn = document.querySelector('.save-btn');
        const clearBtn = document.querySelector('.clear-btn');
        const noteTextarea = document.getElementById('note');
        
        saveBtn.addEventListener('click', saveNote);
        clearBtn.addEventListener('click', clearNote);
        
        function saveNote() {
            const noteText = noteTextarea.value;
            if (noteText.trim() !== '') {
                localStorage.setItem('savedNote', noteText);
                alert('Note saved successfully!');
            } else {
                alert('Please enter some text before saving.');
            }
        }
        
        function clearNote() {
            if (confirm('Are you sure you want to clear the note?')) {
                noteTextarea.value = '';
                localStorage.removeItem('savedNote');
            }
        }
        
        // Load saved note on page load
        window.addEventListener('DOMContentLoaded', () => {
            const savedNote = localStorage.getItem('savedNote');
            if (savedNote) {
                noteTextarea.value = savedNote;
            }
        });
        
        // Unit converter functionality
        const conversionRates = {
            meters: {
                feet: 3.28084,
                miles: 0.000621371,
                kilometers: 0.001,
                meters: 1
            },
            kilometers: {
                feet: 3280.84,
                miles: 0.621371,
                meters: 1000,
                kilometers: 1
            },
            feet: {
                meters: 0.3048,
                kilometers: 0.0003048,
                miles: 0.000189394,
                feet: 1
            },
            miles: {
                meters: 1609.34,
                kilometers: 1.60934,
                feet: 5280,
                miles: 1
            }
        };
        
        const convertBtn = document.querySelector('.converter-container .btn');
        const switchBtn = document.querySelector('.switch-btn');
        
        convertBtn.addEventListener('click', convertUnits);
        switchBtn.addEventListener('click', swapUnits);
        
        function convertUnits() {
            const inputValue = parseFloat(document.getElementById('inputValue').value);
            const inputUnit = document.getElementById('inputUnit').value;
            const outputUnit = document.getElementById('outputUnit').value;
            
            if (isNaN(inputValue)) {
                alert('Please enter a valid number');
                return;
            }
            
            const rate = conversionRates[inputUnit][outputUnit];
            const result = inputValue * rate;
            
            document.getElementById('outputValue').value = result.toFixed(4);
        }
        
        function swapUnits() {
            const inputUnit = document.getElementById('inputUnit');
            const outputUnit = document.getElementById('outputUnit');
            
            const tempValue = inputUnit.value;
            inputUnit.value = outputUnit.value;
            outputUnit.value = tempValue;
            
            convertUnits();
        }
        
        // Initialize calculator display
        updateDisplay();
        
        // Initialize unit converter
        document.addEventListener('DOMContentLoaded', () => {
            convertUnits();
        });
    </script>
</body>
</html>
