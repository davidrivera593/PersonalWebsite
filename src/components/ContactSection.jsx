import {Mail, MapPin, Phone, Linkedin, Instagram, Send} from "lucide-react";
import {cn} from '@/lib/utils'

export const ContactSection = () => {
    return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Get in contact with me for ideas or collaboration opportunities!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/> {""}
                            </div>
                            <div>
                                <h4>Email</h4>
                                <a 
                                    href="mailto:davidrivera593.dr@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    davidrivera593.dr@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/> {""}
                            </div>
                            <div>
                                <h4>Phone</h4>
                                <a 
                                    href="tel:+16025654664"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    +1 (602) xxx-xxxx
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/> {""}
                            </div>
                            <div>
                                <h4>Location</h4>
                                <a 
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Phoenix, Arizona
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/david-rivera-1b6302190/" target="_blank">
                                <Linkedin />
                            </a>
                            <a href="https://www.instagram.com/bigppdavid/" target="_blank">
                                <Instagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                {" "}
                                Your Name
                            </label>
                            <input type="text" id="name" required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Enter Name..."
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                {" "}
                                Your email
                            </label>
                            <input type="email" id="email" name="email" required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Enter email..."
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                {" "}
                                Your Message
                            </label>
                            <textarea id="message" name="message" required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary resize-none"
                            placeholder="Enter Message..."
                            />
                        </div>

                        <button type="submit" className={cn(
                            "cosmic-button w-full flex items-center justify-center gap-2",
                            
                            )}>
                                Send Message
                                <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
};