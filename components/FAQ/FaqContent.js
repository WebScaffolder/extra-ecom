import React from 'react';
import Link from 'next/link';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const FaqContent = () => {
    return (
        <>
            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="faq-sidebar">
                                <ul>
                                    <li>
                                        <Link href="/faq">
                                            <a className="active">Help Center</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/shipping">
                                            <a>Shipping Information</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/delivery-returns">
                                            <a>Return Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-conditions">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="faq-accordion">
                                <Accordion allowZeroExpanded  preExpanded={['a']}>
                                    <AccordionItem uuid="a">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Why are consultants important?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p><strong>Luan</strong> is always looking for talented <a href="#" target="_blank">information</a> security and IT risk management professionals who are dedicated, hard working and looking for a challenge. If you are interested in employment with <strong>Luan</strong>, a company who values you and your family, visit our careers page.</p>
                                            <ul>
                                                <li>a console</li>
                                                <li>Two Joy-Con controllers that are detachable</li>
                                                <li>A grip that enables you to combine them into a single gamepad for play on the TV</li>
                                                <li>Two straps for turning the Joy-Cons into individual controllers</li>
                                                <li>A dock which you can use to connect your console to the television for traditional gameplay</li>
                                            </ul>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="b">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What is the purpose of a consultant?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.</p>
                                            <ul>
                                                <li>a console</li>
                                                <li>Two Joy-Con controllers that are <a href="#" target="_blank">detachable</a></li>
                                                <li>A grip that enables you to combine them into a single gamepad for play on the TV</li>
                                                <li>Two straps for turning the Joy-Cons into <strong>individual</strong> controllers</li>
                                                <li>A dock which you can use to connect your console to the television for traditional gameplay</li>
                                            </ul>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="c">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What attracts you to the role of a consultant?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.</p>
                                            <p>Tunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="d">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What are the advantages of being a consultant?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <ul>
                                                <li>a console</li>
                                                <li>Two Joy-Con controllers that are detachable</li>
                                                <li>A grip that enables you to combine them into a single gamepad for play on the TV</li>
                                                <li>Two straps for turning the Joy-Cons into individual controllers</li>
                                                <li>A dock which you can use to connect your console to the television for traditional gameplay</li>
                                            </ul>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="e">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is consulting a good career?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="f">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How is working in consulting?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.</p>
                                            <ul>
                                                <li>a console</li>
                                                <li>Two Joy-Con controllers that are <a href="#" target="_blank">detachable</a></li>
                                                <li>A grip that enables you to combine them into a single gamepad for play on the TV</li>
                                                <li>Two straps for turning the Joy-Cons into <strong>individual</strong> controllers</li>
                                                <li>A dock which you can use to connect your console to the television for traditional gameplay</li>
                                            </ul>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FaqContent;