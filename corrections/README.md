# Critical Corrections Log

This directory contains documentation of critical factual corrections applied to the case evidence.

## 2026-01-28: Ketoni R18.75M Debt Correction

**File:** `KETONI_RELATIONSHIP_CORRECTION_2026_01_28.md`

### Summary
The R18.75M debt was previously incorrectly attributed to Bantjies personally. The correct structure is:

- **Ketoni Investment Holdings** owes R18.75M to FFT (not Bantjies)
- Bantjies' conflict arises from his **CFO role at George Group** (whose CEO owns Ketoni)
- This is a **CFO-Trustee conflict**, not a debtor-trustee conflict

### Impact on Web Application
The following components may reference Bantjies and should be reviewed:
- `AgentModels.tsx` - Bantjies agent model
- `EntityRelationFramework.tsx` - Bantjies appointment coverage
- `FrameworksOverview.tsx` - Bantjies appointment timeline
- `Home.tsx` - Bantjies appointment priority
- `ResponseStrategies.tsx` - Bantjies appointment strategy
- `VerificationReport.tsx` - Bantjies appointment verification

### Correct Relationship Structure
```
George Group (CEO: Kevin Derrick, CFO: Bantjies)
    │
    └── Kevin Derrick owns Ketoni Investment Holdings
            │
            └── Ketoni owes R18.75M to FFT (May 2026)
                    │
                    └── Bantjies is Trustee of FFT (conflict of interest)
```

See `KETONI_RELATIONSHIP_CORRECTION_2026_01_28.md` for full details.
