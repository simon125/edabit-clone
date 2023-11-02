import { FC } from "react";

import { AppShell } from "./components/AppShell/AppShell";
import { Route, Routes } from "react-router-dom";
import { About, Exercise, Exercises, NotFound } from "./pages";
import { ErrorBoundary } from "./pages/ErrorBoundary/ErrorBoundary";
import { Home } from "./pages/Home/Home";

export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AppShell>
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            </AppShell>
          }
        />
        <Route
          path="/exercises"
          element={
            <AppShell>
              <ErrorBoundary>
                <Exercises />
              </ErrorBoundary>
            </AppShell>
          }
        />
        <Route
          path="/exercises/:id"
          element={
            <AppShell>
              <ErrorBoundary>
                <Exercise />
              </ErrorBoundary>
            </AppShell>
          }
        />
        <Route
          path="/about"
          element={
            <AppShell>
              <About />
            </AppShell>
          }
        />
        <Route
          path="*"
          element={
            <AppShell>
              <NotFound />
            </AppShell>
          }
        />
      </Routes>
    </>
  );
};
