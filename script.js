document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const ruleSearchInput = document.getElementById('rule-search');
    const searchButton = document.getElementById('search-button');
    const loadingElement = document.getElementById('loading');
    const resultsElement = document.getElementById('results');
    const welcomeScreen = document.getElementById('welcome-screen');
    const resultTitle = document.getElementById('result-title');
    const resultContent = document.getElementById('result-content');
    const relatedQuestionsList = document.getElementById('related-questions-list');
    const shareModal = document.getElementById('share-modal');
    const shareButton = document.getElementById('share-result');
    const closeModalButton = document.querySelector('.close-modal');
    const copyLinkButton = document.getElementById('copy-link-button');
    const shareLink = document.getElementById('share-link');
    const getStartedButton = document.getElementById('get-started');
    const topicButtons = document.querySelectorAll('.topic-button');
    const exampleQuestions = document.querySelectorAll('.example-question');
    const saveResultButton = document.getElementById('save-result');
    
    // Basketball Rules Knowledge Base
    const rulesDatabase = {
        // Shot Clock Rules
        "shot clock": {
            title: "Shot Clock in Basketball",
            content: `
                <h4>Shot Clock Definition</h4>
                <p>The shot clock is a countdown timer used in basketball to increase the pace of the game by requiring the team in possession to attempt a field goal before the clock expires.</p>
                
                <h4>Current Shot Clock Rules</h4>
                <ul>
                    <li><strong>NBA:</strong> 24 seconds to shoot, reset to 14 seconds on offensive rebounds</li>
                    <li><strong>FIBA:</strong> 24 seconds to shoot, reset to 14 seconds on offensive rebounds</li>
                    <li><strong>NCAA Men:</strong> 30 seconds to shoot, reset to 20 seconds on offensive rebounds</li>
                    <li><strong>NCAA Women:</strong> 30 seconds to shoot, reset to 20 seconds on offensive rebounds</li>
                    <li><strong>High School:</strong> Shot clock rules vary by state (30-35 seconds where implemented)</li>
                </ul>
                
                <h4>Historical Evolution</h4>
                <p>The shot clock was introduced to the NBA in 1954 at 24 seconds to prevent teams from stalling. Before its introduction, scores were often very low, with teams sometimes holding the ball for minutes without attempting a shot.</p>
                
                <p>Key changes over time:</p>
                <ul>
                    <li><strong>1954:</strong> NBA introduces 24-second shot clock</li>
                    <li><strong>1985:</strong> NCAA adopts 45-second shot clock for men's games</li>
                    <li><strong>1993:</strong> NCAA reduces men's shot clock to 35 seconds</li>
                    <li><strong>2000:</strong> FIBA reduces shot clock from 30 to 24 seconds</li>
                    <li><strong>2015:</strong> NCAA reduces men's shot clock to 30 seconds</li>
                    <li><strong>2018:</strong> NBA and FIBA implement 14-second reset after offensive rebounds</li>
                </ul>
                
                <h4>Game Impact</h4>
                <p>The introduction of the shot clock dramatically increased scoring and pace of play in basketball. It remains one of the most significant rule changes in basketball history, forcing teams to play more aggressively on offense and eliminating stalling tactics.</p>
            `,
            relatedQuestions: [
                "What happens if the shot clock expires?",
                "When does the shot clock reset to 14 seconds?",
                "Do all basketball leagues use the shot clock?",
                "Why was the shot clock introduced?"
            ]
        },
        
        // Goaltending Rules
        "goaltending": {
            title: "Goaltending Rules Explained",
            content: `
                <h4>What is Goaltending?</h4>
                <p>Goaltending is a violation in basketball that occurs when a defensive player interferes with a shot while it's on a downward trajectory toward the basket and has a reasonable chance of entering the basket.</p>
                
                <h4>Specific Goaltending Conditions</h4>
                <p>Goaltending is called when a defender:</p>
                <ul>
                    <li>Touches the ball on its downward flight toward the basket</li>
                    <li>Touches the ball when it's above the ring and in the imaginary cylinder above the basket</li>
                    <li>Touches the ball after it has touched the backboard when the ball is above the ring level</li>
                    <li>Touches the backboard while the ball is on or above the rim</li>
                </ul>
                
                <h4>Offensive Goaltending (Basket Interference)</h4>
                <p>Offensive players can also commit goaltending (usually called basket interference) when they:</p>
                <ul>
                    <li>Touch the ball or basket while the ball is on or within the basket</li>
                    <li>Touch the ball while it's touching the rim</li>
                    <li>Reach through the basket from below and touch the ball</li>
                    <li>Vibrate the rim, net, or backboard while the ball is on or within the basket or on the rim</li>
                </ul>
                
                <h4>Rule Differences Between Leagues</h4>
                <p><strong>NBA vs. FIBA Difference:</strong> In the NBA, once the ball touches the backboard, a defender cannot touch it regardless of whether it's on a downward flight. In FIBA, the ball must be on a downward flight even after touching the backboard for goaltending to be called.</p>
                
                <h4>Penalty for Goaltending</h4>
                <ul>
                    <li><strong>Defensive Goaltending:</strong> The offensive team is awarded the points as if the shot went in (2 or 3 points)</li>
                    <li><strong>Offensive Goaltending:</strong> The basket is disallowed, and the defensive team gains possession</li>
                </ul>
            `,
            relatedQuestions: [
                "What's the difference between goaltending and basket interference?",
                "Can you goaltend a free throw?",
                "Is it goaltending if the ball is still going up?",
                "How does the NBA goaltending rule differ from international rules?"
            ]
        },
        
        // Foul Rules
        "foul rules": {
            title: "Basketball Foul Rules",
            content: `
                <h4>Types of Fouls in Basketball</h4>
                <p>Basketball has several types of fouls that can be called against players and teams:</p>
                
                <h4>Personal Fouls</h4>
                <ul>
                    <li><strong>Common Foul:</strong> Illegal physical contact with an opponent</li>
                    <li><strong>Shooting Foul:</strong> Foul committed against a player in the act of shooting</li>
                    <li><strong>Blocking Foul:</strong> Illegal contact by a defender who impedes the progress of an offensive player</li>
                    <li><strong>Charging Foul:</strong> Offensive player runs into a defender who has established legal position</li>
                    <li><strong>Loose Ball Foul:</strong> Illegal contact while neither team has possession of the ball</li>
                    <li><strong>Offensive Foul:</strong> Illegal contact committed by a player on the offensive team</li>
                    <li><strong>Away From Play Foul:</strong> Foul committed against a player away from the ball or after a made basket</li>
                </ul>
                
                <h4>Technical Fouls</h4>
                <p>Non-contact violations of sportsmanship or game administration:</p>
                <ul>
                    <li>Unsportsmanlike conduct</li>
                    <li>Excessive timeouts</li>
                    <li>Delay of game</li>
                    <li>Number of players on court violations</li>
                    <li>Hanging on the rim (except to avoid injury)</li>
                    <li>Coach or bench personnel entering the court without permission</li>
                </ul>
                
                <h4>Flagrant Fouls</h4>
                <ul>
                    <li><strong>Flagrant 1:</strong> Unnecessary contact committed by a player against an opponent</li>
                    <li><strong>Flagrant 2:</strong> Unnecessary and excessive contact committed by a player against an opponent (results in ejection)</li>
                </ul>
                
                <h4>Foul Limits</h4>
                <ul>
                    <li><strong>NBA:</strong> 6 personal fouls before disqualification, team enters bonus after 4 fouls in a quarter</li>
                    <li><strong>FIBA:</strong> 5 personal fouls before disqualification, team enters bonus after 4 fouls in a quarter</li>
                    <li><strong>NCAA:</strong> 5 personal fouls before disqualification, team enters bonus after 7 fouls in a half (1-and-1), double bonus after 10 fouls</li>
                </ul>
                
                <h4>Penalty Situations</h4>
                <p><strong>Bonus (Team Fouls):</strong> When a team exceeds the foul limit for a period, the opposing team is awarded free throws on non-shooting fouls.</p>
                <p><strong>Penalty for Technical Fouls:</strong> One free throw (NBA and FIBA) or two free throws (NCAA) plus possession of the ball.</p>
            `,
            relatedQuestions: [
                "What is the difference between a flagrant 1 and flagrant 2 foul?",
                "How many fouls until a player fouls out?",
                "What is the bonus rule in basketball?",
                "Can coaches get technical fouls?"
            ]
        },
        
        // Backcourt Violation
        "backcourt violation": {
            title: "Backcourt Violation Rules",
            content: `
                <h4>What is the Backcourt Violation?</h4>
                <p>A backcourt violation occurs when a team in control of the ball in their frontcourt causes the ball to go into the backcourt, and they are the first to touch the ball in the backcourt.</p>
                
                <h4>When Does a Team Have Frontcourt Control?</h4>
                <p>A team gains frontcourt control when:</p>
                <ul>
                    <li>Both feet of a player with the ball are in the frontcourt</li>
                    <li>The ball touches the frontcourt or any player whose body is touching the frontcourt</li>
                </ul>
                
                <h4>Exceptions to the Backcourt Rule</h4>
                <p>A backcourt violation is NOT called when:</p>
                <ul>
                    <li>A defensive player taps the ball into the backcourt</li>
                    <li>A new possession begins (such as after a rebound or steal)</li>
                    <li>The offensive player jumps from the frontcourt, catches the ball while in the air, and lands in the backcourt (as long as they're the first to touch the ball after a teammate passes it)</li>
                    <li>During a jump ball, the ball is tapped into the backcourt</li>
                </ul>
                
                <h4>Different League Rules</h4>
                <ul>
                    <li><strong>NBA & FIBA:</strong> 8 seconds to move the ball from backcourt to frontcourt</li>
                    <li><strong>NCAA:</strong> 10 seconds to move the ball from backcourt to frontcourt</li>
                </ul>
                
                <h4>Penalty</h4>
                <p>The penalty for a backcourt violation is loss of possession. The opposing team is awarded the ball out of bounds nearest to where the violation occurred.</p>
                
                <h4>Historical Context</h4>
                <p>The backcourt rule was implemented to increase the pace of play and prevent teams from stalling by retreating with the ball. The NBA originally had a 10-second rule but reduced it to 8 seconds in the 2001-2002 season to increase the pace of play, following FIBA's change in 2000.</p>
            `,
            relatedQuestions: [
                "What's the difference between backcourt violation and over-and-back?",
                "Does the 8-second count reset if there's a foul?",
                "Can you catch a pass in the air and land in the backcourt?",
                "Is it backcourt if the ball is deflected by the defense?"
            ]
        }
    };
    
    // Event Listeners
    searchButton.addEventListener('click', handleSearch);
    ruleSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    topicButtons.forEach(button => {
        button.addEventListener('click', () => {
            const topic = button.getAttribute('data-topic');
            ruleSearchInput.value = topic;
            handleSearch();
        });
    });
    
    exampleQuestions.forEach(button => {
        button.addEventListener('click', () => {
            const question = button.getAttribute('data-question');
            ruleSearchInput.value = question;
            handleSearch();
        });
    });
    
    getStartedButton.addEventListener('click', () => {
        ruleSearchInput.focus();
        document.querySelector('.rules-analyzer').scrollIntoView({ behavior: 'smooth' });
    });
    
    shareButton.addEventListener('click', () => {
        // Set the share link to current URL + query parameter
        const searchQuery = encodeURIComponent(ruleSearchInput.value);
        const shareUrl = `${window.location.origin}${window.location.pathname}?q=${searchQuery}`;
        shareLink.value = shareUrl;
        
        // Show modal
        shareModal.classList.remove('hidden');
    });
    
    closeModalButton.addEventListener('click', () => {
        shareModal.classList.add('hidden');
    });
    
    copyLinkButton.addEventListener('click', () => {
        shareLink.select();
        document.execCommand('copy');
        copyLinkButton.textContent = 'Copied!';
        setTimeout(() => {
            copyLinkButton.textContent = 'Copy';
        }, 2000);
    });
    
    saveResultButton.addEventListener('click', () => {
        saveResultButton.innerHTML = '<i class="fas fa-bookmark"></i>';
        saveResultButton.style.color = '#f39c12';
        
        // This would normally save the result to localStorage or a database
        // For this demo, we'll just show a visual confirmation
        showNotification('Result saved to your bookmarks!');
    });
    
    document.querySelectorAll('.share-option').forEach(option => {
        option.addEventListener('click', () => {
            const platform = option.getAttribute('data-platform');
            const url = shareLink.value;
            const title = 'Basketball Rule Insights: ' + resultTitle.textContent;
            
            switch(platform) {
                case 'twitter':
                    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`);
                    break;
                case 'facebook':
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
                    break;
                case 'linkedin':
                    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
                    break;
                case 'email':
                    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent('Check out this basketball rule explanation: ' + url)}`;
                    break;
            }
            
            shareModal.classList.add('hidden');
        });
    });
    
    // Check URL for query parameter on page load
    checkUrlForQuery();
    
    // Functions
    function handleSearch() {
        const query = ruleSearchInput.value.trim().toLowerCase();
        
        if (!query) {
            showNotification('Please enter a rule or question to search for.');
            return;
        }
        
        // Show loading state
        welcomeScreen.classList.add('hidden');
        resultsElement.classList.add('hidden');
        loadingElement.classList.remove('hidden');
        
        // Simulate API call with timeout
        setTimeout(() => {
            const result = findRuleInDatabase(query);
            
            if (result) {
                displayResult(result);
            } else {
                handleAIGeneration(query);
            }
            
            loadingElement.classList.add('hidden');
        }, 1500);
    }
    
    function findRuleInDatabase(query) {
        // Check if the query directly matches a key in our database
        if (rulesDatabase[query]) {
            return rulesDatabase[query];
        }
        
        // Check if the query contains any of our rule keys
        for (const key in rulesDatabase) {
            if (query.includes(key)) {
                return rulesDatabase[key];
            }
        }
        
        // Check for specific terms
        if (query.includes('shot clock')) {
            return rulesDatabase['shot clock'];
        } else if (query.includes('goaltend') || query.includes('goal tend')) {
            return rulesDatabase['goaltending'];
        } else if (query.includes('foul') || query.includes('technical') || query.includes('flagrant')) {
            return rulesDatabase['foul rules'];
        } else if (query.includes('backcourt') || query.includes('over and back')) {
            return rulesDatabase['backcourt violation'];
        }
        
        return null;
    }
    
    function displayResult(result) {
        resultTitle.textContent = result.title;
        resultContent.innerHTML = result.content;
        
        // Create related questions
        relatedQuestionsList.innerHTML = '';
        result.relatedQuestions.forEach(question => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = question;
            a.addEventListener('click', (e) => {
                e.preventDefault();
                ruleSearchInput.value = question;
                handleSearch();
            });
            li.appendChild(a);
            relatedQuestionsList.appendChild(li);
        });
        
        resultsElement.classList.remove('hidden');
        
        // Update URL with query parameter
        const searchQuery = encodeURIComponent(ruleSearchInput.value);
        const newUrl = `${window.location.pathname}?q=${searchQuery}`;
        history.pushState(null, '', newUrl);
    }
    
    function handleAIGeneration(query) {
        // In a real implementation, this would call an AI API like OpenAI
        // For demo purposes, we'll generate a generic response
        
        // Generate a title based on the query
        const titleWords = query.split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        
        const result = {
            title: titleWords,
            content: `
                <h4>Analysis</h4>
                <p>You asked about "${query}". This is an AI-generated response that would typically provide detailed information about the basketball rule or question.</p>
                
                <p>In a fully implemented version, this would:</p>
                <ul>
                    <li>Pull information from an NBA rulebook database</li>
                    <li>Include historical context about rule changes</li>
                    <li>Explain how the rule affects gameplay</li>
                    <li>Potentially include visual examples or videos</li>
                </ul>
                
                <h4>Implementation Note</h4>
                <p>This is a simulated response for demonstration purposes. In the production version, this would connect to a large language model like GPT-4 that has been fine-tuned on basketball rules, history, and their impact on the game.</p>
                
                <p>For more accurate information on this topic, we recommend consulting the official NBA rulebook or recognized basketball authorities.</p>
            `,
            relatedQuestions: [
                "What are the basic rules of basketball?",
                "How do NBA rules differ from FIBA rules?",
                "What are the most controversial rule changes in basketball?",
                "How are basketball rules enforced during games?"
            ]
        };
        
        displayResult(result);
    }
    
    function checkUrlForQuery() {
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('q');
        
        if (query) {
            ruleSearchInput.value = query;
            handleSearch();
        }
    }
    
    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // Add styles
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = 'rgba(48, 51, 107, 0.9)';
        notification.style.color = 'white';
        notification.style.padding = '12px 20px';
        notification.style.borderRadius = '4px';
        notification.style.zIndex = '1000';
        notification.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        notification.style.transition = 'all 0.3s ease';
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        
        // Add to body
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);
        
        // Remove after timeout
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
});