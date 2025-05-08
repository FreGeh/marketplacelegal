import { Github } from "@/components/shared/icons";

export default function DocsPage() {
  return (
    <>
    <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/FreGeh/marketplacelegal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">Visit on</span> GitHub{" "}
            </p>
          </a>
    </>
    );
}