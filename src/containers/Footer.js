import React from 'react';
import SocialIcons from '../components/SocialIcons';

const Footer = (props) => {
    return (
        <footer>

            {/*<div className="container">*/}
                {/*<div className="row">*/}
                    {/*<div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">*/}
                        {/*<ul className="list-inline text-center">*/}
                            {/*{% if site.twitter_username %}*/}
                            {/*<li>*/}
                                {/*<a href="https://twitter.com/{{ site.twitter_username }}" target="_blank">*/}
                            {/*<span className="fa-stack fa-lg">*/}
                                {/*<i className="fa fa-circle fa-stack-2x">&nbsp;</i>*/}
                                {/*<i className="fa fa-twitter fa-stack-1x fa-inverse">&nbsp;</i>*/}
                            {/*</span>*/}
                                {/*</a>*/}
                            {/*</li>*/}
                            {/*{% endif %}*/}
                            {/*{% if site.facebook_username %}*/}
                            {/*<li>*/}
                                {/*<a href="https://www.facebook.com/{{ site.facebook_username }}" target="_blank">*/}
                            {/*<span className="fa-stack fa-lg">*/}
                                {/*<i className="fa fa-circle fa-stack-2x">&nbsp;</i>*/}
                                {/*<i className="fa fa-facebook fa-stack-1x fa-inverse">&nbsp;</i>*/}
                            {/*</span>*/}
                                {/*</a>*/}
                            {/*</li>*/}
                            {/*{% endif %}*/}
                            {/*{% if site.github_username %}*/}
                            {/*<li>*/}
                                {/*<a href="https://github.com/{{ site.github_username }}" target="_blank">*/}
                            {/*<span className="fa-stack fa-lg">*/}
                                {/*<i className="fa fa-circle fa-stack-2x">&nbsp;</i>*/}
                                {/*<i className="fa fa-github fa-stack-1x fa-inverse">&nbsp;</i>*/}
                            {/*</span>*/}
                                {/*</a>*/}
                            {/*</li>*/}
                            {/*{% endif %}*/}
                            {/*{% if site.email_username %}*/}
                            {/*<li>*/}
                                {/*<a href="mailto:{{ site.email_username }}" target="_blank">*/}
                            {/*<span className="fa-stack fa-lg">*/}
                                {/*<i className="fa fa-circle fa-stack-2x">&nbsp;</i>*/}
                                {/*<i className="fa fa-envelope fa-stack-1x fa-inverse"></i>*/}
                            {/*</span>*/}
                                {/*</a>*/}
                            {/*</li>*/}
                            {/*{% endif %}*/}
                        {/*</ul>*/}
                        {/*<p className="copyright text-muted">Copyright &copy; {{ site.copyright_name }} {{ site.time | date: '%Y' }}</p>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
        </footer>
    )
};
export default Footer;