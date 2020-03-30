ATTACK_MAX = 7;
SATTACK_MAX = 14;
MON_ATTACK_MAX = 10;
HEALTH_MAX = 10;

new Vue({
    el: "#app",
    data: {
        status: "start screen",
        buttonStatus: "start screen",
        playerHealth: 100,
        monsterHealth: 100,
        log: []
    },

    watch: {
        playerHealth: function() {
            if (this.playerHealth <= 0) {
                var retVal = confirm("You lost :(. Would you like to play again?")

                if (retVal) {
                    this.resetGame()
                    this.status = "in game";
                }

                else {
                    this.buttonStatus = "start screen"
                }
            }
        },

        monsterHealth: function() {
            if (this.monsterHealth <= 0) {
                var retVal = confirm("You Won :). Would you like to play again?")

                if (retVal) {
                    this.resetGame()
                    this.status = "in game";
                }

                else {
                    this.buttonStatus = "start screen"
                }
            }
        }
    },
    
    computed: {
        monHealthBar: function() {
            return this.monsterHealth + "%";
        },

        playerHealthBar: function() {
            return this.playerHealth + "%";
        }
    },

    methods: {
        changeGameState: function() {
            // After clicking the "Start New Game" button, change the status to display the log and the attacks
            this.resetGame();
            this.status = "in game";
            this.buttonStatus = "in game";
        },

        attack: function(attackType) {
            damage = 0;
            if (attackType == "attack") {
                damage = Math.floor(Math.random() * ATTACK_MAX) + 1;
            }
            
            else {
                damage = Math.floor(Math.random() * SATTACK_MAX) + 1;
            }
            
            // Subtract a random amount of health from the monster between 1 and either ATTACK_MAX or SATTACK_MAX
            this.monsterHealth -= damage;

            this.log.push({player: "Player dealt " + damage + " HP"})

            // The monster always attacks
            this.monAttack()

        },

        monAttack: function() {
            // Subtract a random amount of health from the player between 1 and MON_ATTACK_MAX
            damage = Math.floor(Math.random() * MON_ATTACK_MAX) + 1;
            this.playerHealth -= damage;
            this.log.push({monster: "Monster dealt " + damage + " HP"})
        },

        playerHeal: function() {
            // Add a random amount of health to the player between 1 and HEALTH_MAX

            healVal = Math.floor(Math.random() * HEALTH_MAX) + 1

            // The player health should not be able to go above 100
            if (healVal + this.playerHealth > 100) {
                this.playerHealth = 100;
            }
            
            else {
                this.playerHealth += healVal;
            } 

            this.log.push({player: "Player healed " + healVal + " HP"})
            
            // The monster always attacks
            this.monAttack();
        },

        resetGame: function() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.log = [];
        }

    }

});