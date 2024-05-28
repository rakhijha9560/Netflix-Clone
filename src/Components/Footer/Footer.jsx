import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
     <footer>
          <div className="Query">
            <p>Questions? call 000-800-919-1694</p>
          </div>
          <div className="info-links">
            <ul>
              <li>
                <Link
                  style={{ color: "#fff" }}
                  to="https://help.netflix.com/en/node/412">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "#fff" }}
                  to="https://help.netflix.com/en/">
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "#fff" }}
                  to="https://help.netflix.com/legal/termsofuse">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "#fff" }}
                  to="https://help.netflix.com/legal/privacy">
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "#fff" }}
                  to="https://help.netflix.com/en/node/134094">
                  Corporate Information
                </Link>
              </li>
            </ul>
          </div>
        </footer>
    </>
  )
}

export default Footer