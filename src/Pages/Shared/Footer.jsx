import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Project Overview */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Historical Artifacts Tracker
          </h3>
          <p className="text-sm">
            A web application to track and explore historical artifacts like the
            Rosetta Stone and Antikythera Mechanism. Users can browse,
            contribute, and manage artifact details with ease.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="/browse-artifacts"
                className="text-gray-400 hover:text-gray-200"
              >
                Browse Artifacts
              </a>
            </li>
            <li>
              <a
                href="/view-details"
                className="text-gray-400 hover:text-gray-200"
              >
                View Artifact Details
              </a>
            </li>
            <li>
              <a
                href="/add-entry"
                className="text-gray-400 hover:text-gray-200"
              >
                Add Your Own Entries
              </a>
            </li>
          </ul>
        </div>

        {/* Contributions */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contributions</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="/like-artifacts"
                className="text-gray-400 hover:text-gray-200"
              >
                Like Artifacts
              </a>
            </li>
            <li>
              <a
                href="/track-contributions"
                className="text-gray-400 hover:text-gray-200"
              >
                Track Your Contributions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Legal */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact & Legal</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="mailto:support@artifactstracker.com"
                className="text-gray-400 hover:text-gray-200"
              >
                support@artifactstracker.com
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-gray-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-of-service"
                className="text-gray-400 hover:text-gray-200"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm">
        <p>© 2024 Historical Artifacts Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
