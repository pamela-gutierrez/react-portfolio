# React Portfolio

This portfolio was originally built using only HTML, CSS and Foundation CSS but I have updated it to include React. I provide information about myself, who I am, and what I've done, as well as contact information. Additionally, I provide links and descriptions to some of my recent work.

#### **Deployed Link**

* [See Live Site](https://pamela-gutierrez.github.io/react-portfolio/)

![alt-text](assets/updated-portfolio.gif)

## **Built With**
* [React](https://reactjs.org/)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [GitHub](https://github.com/)
* [Foundation](https://get.foundation/index.html)
*  Git - used to track changes to code

______________________________________________________________________________

#### **Code Snippet**

As I transitioned this portfolio to work with React I still wanted to use Foundation's hover reveal button as a main feature of my page. Unfortunately, with the transition came small stylistic glitches, particularly with React <Link>. I plan to iron out these glitches at a later time. However, just like in the first iteration of this portfolio, I had to make use of Foundation's hide and reveal classes as the button is not inherently responsive. 

Large and Medium Screens:
```
            <div className="button-hover-reveal-wrapper hide-for-small-only">
                    <label>Learn More</label>
                    <a href={Resume} target="_blank" rel="noreferrer"
                        className="button-hover-reveal">Resume</a>

                    <Link to={"/about"}>
                        <a className="button-hover-reveal">About Me</a>
                    </Link>

                    <Link to={"/projects"}>
                        <a className="button-hover-reveal">Projects</a>
                    </Link>

                </div>
```
On Small Screens - First of Three Buttons:
```
              <div className="grid-x show-for-small-only" style={{ marginBottom: 10 }}>
                    <div className="cell" style={{ marginBottom: 70 }}>
                        <div className="button-hover-reveal-wrapper show-for-small-only">
                            <label>Resume</label>
                            {/* <!-- RESUME BUTTON --> */}
                            <a href="assets/Pamela_Gutierrez_-_Web_Developer (2).pdf" target="_blank" rel="noreferrer"
                                className="button-hover-reveal">Resume</a>
                        </div>
                    </div>
                    <div className="cell" style={{ marginBottom: 70 }}>
                        <div className="button-hover-reveal-wrapper show-for-small-only">
                            <label>About Me</label>
                            <a className="button-hover-reveal">
                                About Me</a>
                        </div>
                    </div>
                    <div className="cell" style={{ marginBottom: 70 }}>
                        <div className="button-hover-reveal-wrapper show-for-small-only">
                            <label>Projects</label>
                            <a className="button-hover-reveal">Projects</a>
                        </div>
                    </div>
                </div>
```


______________________________________________________________________________

### **Author Links**

* **PAMELA GUTIERREZ**
* **UC Berkeley Coding Bootcamp**
  
- [Link to Portfolio Site](#)
- [Link to Github](https://github.com/pamela-gutierrez) 
- [Link to LinkedIn](www.linkedin.com/in/pamela-gutierrez)



______________________________________________________________________________

#### **License**

This project is licensed under the MIT License