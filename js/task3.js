
        const app = Vue.createApp({
            data() {
                return {
                    kmh: 0, 
                    ms: 0
                };
            },
            methods: {
                fromKmh() {
                    this.ms = (this.kmh / 3.6).toFixed(2);
                },
                fromMs() {
                    this.kmh = (this.ms * 3.6).toFixed(2);
                }
            }
        });

        app.mount('#app');
    
