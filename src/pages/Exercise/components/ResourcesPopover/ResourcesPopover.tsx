import { FC, ReactNode } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";

interface ResourcesPopoverProps {
  children: ReactNode;
}

export const ResourcesPopover: FC<ResourcesPopoverProps> = ({ children }) => {
  return (
    <OverlayTrigger
      trigger={["hover", "focus"]}
      placement="right"
      overlay={
        <Popover id="popover-basic">
          <Popover.Header as="h3">Stop! Don't click yet!</Popover.Header>
          <Popover.Body>
            Before you see the solution I strongly recommend to see{" "}
            <strong>resources tab</strong> first. Try to solve the problem on
            your own by multiple tries and searches on the internet - that's how
            you learn!
          </Popover.Body>
        </Popover>
      }
    >
      <span>{children}</span>
    </OverlayTrigger>
  );
};
