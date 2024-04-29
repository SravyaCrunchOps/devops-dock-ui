import { React } from "react";
import cidr_img from '../../../assets/images/cidr.png';
import ipv6_img from '../../../assets/images/ipv6.png';


const IPv6Content = () => {
    return (
        <div className="cidr-content text-justify py-3">
            <p>
                CIDR means Classless Inter-Domain Routing, is a method used to allocate and specify IP addresses and
                their associated routing information. It is used to replace traditional classful addressing system and allows
                users to use VLSM (Variable Length Subnet Masks) for dynamic subnet routing.
            </p>
            {/*  section-1 */}
            <section>
                <h3 id='1' className="cidr-title">Why Ipv6 ?</h3>
                <ul>
                    <li>
                        IPv6 is the latest version of the Internet Protocol, which assigns a unique identifier to every device on the network.
                    </li>
                    <li>
                        IPv6 addresses are 128 bits long, compared to 32 bits for IPv4 addresses. This means that IPv6 can support a much larger number of devices and subnets than IPv4.
                    </li>
                    <li>
                        However, it also means that IPv6 addresses are more complex and harder to read and write. Subnetting IPv6 addresses can simplify network administration, routing, and troubleshooting.
                    </li>
                </ul>
            </section>

            {/* section-2 */}
            <section>
                <h3 id='2' className="cidr-title">How to subnet Ipv6 ?</h3>
                <p>
                    <h5 id='2-1' className="cidr-subtitle text-decoration-underline mb-4">IPv6 Notation:</h5>
                    <figure>
                        <img src={ipv6_img} alt='cidr-image' width='100%' className="py-2" />
                        <figcaption className="text-center text-secondary">
                            <i>IPv6 representation</i>
                        </figcaption>
                    </figure>
                    <ol>
                        <li>
                            To subnet an IPv6 address, you need to determine the length of the network prefix and the subnet mask.
                        </li>
                        <li>
                            The network prefix length is the number of bits that are fixed in the address, while the subnet mask is a binary pattern that indicates which bits are part of the network prefix and which bits are part of the interface identifier.
                        </li>
                        <li>
                            The network prefix length and the subnet mask are usually written in slash notation, such as /64 or /48.
                        </li>
                    </ol>
                    <p>
                        <b>For Example</b>
                        <ul>
                            <li>
                                If you have an IPv6 address of 2001:db8:abcd:1234::1/64, it means that the network prefix is 2001:db8:abcd:1234 and the interface identifier is ::1.
                            </li>
                            <li>
                                The subnet mask is 64 bits of 1s followed by 64 bits of 0s. To create subnets, you can borrow bits from the interface identifier and add them to the network prefix.
                            </li>
                            <li>
                                For instance, if you want to create four subnets, you can borrow two bits from the interface identifier and assign them different values, such as 00, 01, 10, and 11. This will create four subnets with network prefixes of 2001:db8:abcd:1234:0::/66, 2001:db8:abcd:1234:4000::/66, 2001:db8:abcd:1234:8000::/66, and 2001:db8:abcd:1234:c000::/66.
                            </li>
                        </ul>
                    </p>
                </p>
            </section>

            {/* section-3 */}
            <section>
                <h3 id='3' className="cidr-title">How to calculate IPv6 subnets ?</h3>
                <p>
                    To calculate the number of subnets and hosts that can be created from an IPv6 address, you can use the following formulas:
                </p>
                <ul>
                    <li>
                        Number of subnets equals  = 2^(n-m),    <br/>
                        n = network prefix length and <br/>
                        m = original network prefix length;  
                   </li>
                    <li>
                        Number of hosts per subnet = 2^(128 - n),    <br/>
                        where n = network prefix length.
                    </li>
                </ul>
                <p>
                    <b>For example,</b><br/>
                    If you have an IPv6 address of 2001:db8:abcd:1234::1/64 and you want to create four subnets with /66 network prefixes, you can use the formulas as follows: <br/>
                    <b>No.of subnets</b> = 2^(66 - 64) = 2^2 = 4; and <br/>
                    <b>No.of host bits</b> = 2 ^(128 - 66) = 2^62. host bits
                </p>
            </section>

            {/* section-4 */}
            <section>
                <h3 id='4' className="cidr-title">How to write IPv6 subnets?</h3>
                <p>When writing IPv6 subnets, you should adhere to certain rules and conventions.</p>
                <ul>
                    <li>
                        These include using hexadecimal digits (0-9 and A-F) to represent each group of four bits in the address,
                    </li>
                    <li>
                        Separating each group of 16 bits with colons (:),
                    </li>
                    <li>
                        Replacing consecutive groups of zeros with double colons (::), and using lowercase letters for hexadecimal digits.
                    </li>
                    <li>
                        Additionally, you should use slash notation (/) to indicate the network prefix length or subnet mask.
                    </li>
                </ul>
                <p>
                    <b>For example,</b><br/>
                    the IPv6 subnet 2001:db8:abcd:1234:c000::/66 can be written as 2001:db8:abcd:1234:c000:0000:0000:0000/66 in full form, or 2001:db8:abcd:1234:c000::/66 in compressed form.
                </p>
            </section>

            {/* section-5 */}
            <section>
                <h3 id='5' className="cidr-title">What are the differences from IPv4 subnetting?</h3>
                <ul>
                    <li>
                        IPv6 subnetting has some differences from IPv4 subnetting, such as longer and more complex addresses using hexadecimal digits separated by colons, and double colons to compress the address.
                    </li>
                    <li>
                        Additionally, IPv6 addresses have a fixed network prefix length of 64 bits, while IPv4 addresses can have variable network prefix lengths. Furthermore, IPv6 addresses provide a larger number of subnets and hosts than IPv4 addresses.
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default IPv6Content;
